const userModal = require('../models/userModal');
const jwt = require('jsonwebtoken');

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

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModal.findById(decoded._id).select("-password");
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: User not found' });
    }

    req.user = user;
    next();

  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
