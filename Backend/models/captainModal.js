const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'Firstname mush be at least 3 cherecter long' ]
        },
         lastname: {
            type: String,
            minlength: [3, 'lastname mush be at least 3 cherecter long' ]
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
          match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ]
    },
     password: {
        type: String,
         required: true,
         select: false
     },
     socketId: {
        type: String,
     },

     status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
     },
     vehicle: {
     color: {
        type: String,
        required: true,
        minlength: [3, ' color must be at least 3 cherectors long'], 

     },
      plate: {
        type: String,
        required: true,
        minlength: [3, ' Plate must be at least 3 cherectors long'],

     },
       capacity: {
        type: Number,
        required: true,
        min: [ 1, ' Capacity must be at least 1'],

     },
     vehicleType: {
        type: String,
        required: true,
        enum: ['car', 'motorcycle', 'auto'],
     }
    },
     location: {
        ltd: {
            type: Number,
        },
        lng: {
            type: Number,
        }
     }

})



captainSchema.methods.generateAuthToken = function () {

    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword  = async function (password) {
    return await bcrypt.hash(password, 10);
    
}

const captainModal = mongoose.model('captain', captainSchema)



module.exports = captainModal;