const mongoose = require('mongoose')

const OwnerSchema = mongoose.Schema({

    fullname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    contactNO: {
        type: Number,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    picture: String,

    gstin: {
        type: String,
        required: true,
    },

    products: {
        type: Array,
        default: []
    },

})

module.exports = mongoose.model("owner", OwnerSchema)