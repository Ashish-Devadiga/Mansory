const { type } = require('@hapi/joi/lib/extend')
const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({

    productimage: [
        {
            type: Buffer,
        }
    ],

    productname: String,
    productprice: String,
    productdetail: String,

    productinfo: [
        {
            type: String,
        }
    ],

    productsize: [
        {
            type: String,
        }
    ],

    productcolor: [
        {
            type: String,
        }
    ],


    productdiscount: String,
})

module.exports = mongoose.model("product", ProductSchema)
