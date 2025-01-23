const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({

    fullname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    contactNo: {
        type: Number,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    address: {
        type: String,
    },

    picture: {
        type: Buffer,
        default: "/public/images/BrandModels/img10.jpg"
    },
    

    orders: [ 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        }
     ],

    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        }
    ],

})

module.exports = mongoose.model("user", UserSchema)
