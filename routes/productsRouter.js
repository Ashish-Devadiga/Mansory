const express = require('express');
const router = express.Router();
const upload = require('../config/tools/multer-config');
const productModel = require('../models/product-model');

router.post("/create", upload.array("productimage", 10), async function (req, res) {

    try {
        let { productname, productdetail, productinfo, productprice, productdiscount, productsize, productcolor } = req.body;

        const buffers = req.files.map(file => file.buffer)

        let product = await productModel.create({
            productimage: buffers,
            productname,
            productprice,
            productdetail,
            productinfo,
            productdiscount,
            productsize,
            productcolor,
        })
        req.flash("success", "Product Created Successfully")
        res.redirect("/owners/adminpannel")


    } catch (err) {
        req.flash("error", err.massage)
        return res.redirect("/owners/adminpannel")
    }
})

module.exports = router;
