const userModal = require('../models/userModal');
const jwt = require('jsonwebtoken');
const blacklistTokenModal = require('../models/blacklistTokenModal');
const captainModal = require('../models/captainModal');

module.exports.authUser = async (req, res, next) => {
  try {
    let token = req.cookies?.token;

    if (!token &&  req.headers.authorization) {
      const parts = req.headers.authorization.split(' ');
      if (parts[0] === 'Bearer' && parts[1]) {
        token = parts[1];
      }
    }

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token' });
    }

    const isBlacklisted = await userModal.findOne({ token: token})
if(isBlacklisted) {
  res.status(401).json({ message: 'Unauthorized'})
}

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModal.findById(decoded._id).select("-password");
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: User not found ' });
    }

    req.user = user;
    next();

  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};


module.exports.authCaptain = async (req, res, next) => {
  try {
    let token = req.cookies?.token;

    if (!token &&  req.headers.authorization) {
      const parts = req.headers.authorization.split(' ');
      if (parts[0] === 'Bearer' && parts[1]) {
        token = parts[1];
      }
    }

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token' });
    }

    const isBlacklisted = await blacklistTokenModal.findOne({ token: token})
if(isBlacklisted) {
  res.status(401).json({ message: 'Unauthorized'})
}

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModal.findById(decoded._id).select("-password");
    if (!captain) {
      return res.status(401).json({ message: 'Unauthorized: User not found ' });
    }

    req.captain = captain;
    next();

  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
