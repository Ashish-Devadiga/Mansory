const express = require('express')
const router = express.Router()
const config = require('config')
const productModel = require('../models/product-model')
const { Ownerisloggedin } = require('../middlewares/is_Loggedin')
const { registerOwner } = require('../controller/ownerauth')
const { LoginOwner } = require('../controller/ownerauth')
const { logout } = require('../controller/ownerauth')

if (process.env.NODE_ENV === "development") {

  router.get('/admin', function (req, res) {
    let error = req.flash("error")
    let errorlogin = req.flash("errorlogin")
    res.render('owneregister', { navregister: false, navlogin: false, config, error, errorlogin })
  })

  router.get('/adminpannel', Ownerisloggedin, function (req, res) {
    let error = req.flash("error")
    let success = req.flash("success")
    let errorlogin = req.flash("errorlogin")
    res.render('adminpannel', { navregister: false, navlogin: false, admin: true, config, success, error, errorlogin })
  })

  router.get('/products', Ownerisloggedin, async function (req, res) {
    let success = req.flash("success")
    let errorlogin = req.flash("errorlogin")
    let products = await productModel.find().populate("productimage")
    res.render('ownerproducts', { navshop: false, navprofile: true, config, success, errorlogin, products })
  })

  router.get('/removeproduct/:productid', Ownerisloggedin, async function (req, res) {
    req.flash("success", "Product Removed");
    await productModel.findOneAndDelete({ _id: req.params.productid });
    res.redirect("/owners/products");
  })

  router.post("/register", registerOwner)

  router.post("/Login", LoginOwner)

  router.get("/logout", logout)
}

module.exports = router


