const captainModal = require("../models/captainModal");
const captainService = require("../services/captainService");
const { validationResult } = require("express-validator");
const blacklistTokenModal = require("../models/blacklistTokenModal");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;
  const isCaptainAlreadyExist = await captainModal.findOne({ email });
  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: "Captain already exist" });
  }

  const hashedPassword = await captainModal.hashPassword(password);
  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.stauts(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModal.findOne({ email }).select("+password");

  if (!captain) {
    return res.tatus(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.stauts(401).json({ message: "Invalid email or password" });
  }

  const token = captain.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, captain });
};

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }
    await blacklistTokenModal.create({ token });

    res.clearCookie("token");

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
