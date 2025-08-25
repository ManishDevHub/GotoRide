const express = require('express')
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/userController')
const authmiddleware = require('../middlewares/authMiddleware')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('first name mush be at least 3 cherectors long'),
    body('password').isLength({min: 6}).withMessage('password mush be at least 6 cherector long')
],
userController.registerUser)


router.post('/login', [
     body('email').isEmail().withMessage('Invalid Email'),
     body('password').isLength({min: 6}).withMessage('password mush be at least 6 cherector long')
],
userController.loginUser
)

router.get('/profile',authmiddleware.authUser, userController.getUserProfile)


module.exports = router;