const captainModal = require('../models/captainModal');
const captainService = require('../services/captainService')
const { validationResult } = require('express-validator')
const blacklistTokenModal = require('../models/blacklistTokenModal')


module.exports.registerCaptain = async (req, res, next) => {

const errors = validationResult(req);

if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
}

 const { fullname, email, password, vehicle } = req.body;
const isCaptainAlreadyExist = await captainModal.findOne({ email });
if (isCaptainAlreadyExist){
    return res.status(400).json({ message: 'Captain already exist'})
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
    vehicleType: vehicle.vehicleType
});

const token = captain.generateAuthToken();
res.status(201).json({ token , captain });

}