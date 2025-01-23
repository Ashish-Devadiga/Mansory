const express = require('express')
const router = express.Router()
const config = require("config")
const { UserisLoggedin } = require('../middlewares/is_Loggedin')
const productModel = require('../models/product-model');
const usersModel = require('../models/users-model');
const upload = require('../config/tools/multer-config');

router.get('/', function (req, res) {
    let error = req.flash("error")
    res.render('index', { navregister: true, navlogin: false, navlogout: false, admin: false, config, error })
})

router.get('/register', function (req, res) {
    let error = req.flash("error")
    res.render('register', { navregister: false, navlogin: true, navlogout: false, admin: false, config, error })
})

router.get('/profile', UserisLoggedin, async function (req, res) {
    let success = req.flash("success")
    let error = req.flash("error")
    let user = await usersModel.findOne({ email: req.user.email })
    res.render('profile', { navregister: false, navlogin: false, navlogout: true, admin: false, config, error, success, user })
})

router.post('/changedp', upload.single("image"), UserisLoggedin, async function (req, res) {
    req.flash("success", "Profile Picture Updated");
    let user = await usersModel.findOne({ email: req.user.email })
    user.picture = req.file.buffer;
    await user.save()
    res.redirect("/profile")
})

router.get('/shop', UserisLoggedin, async function (req, res) {
    let error = req.flash("error")
    let success = req.flash("success")
    let products = await productModel.find().populate("productimage")
    let user = await usersModel.findOne({ email: req.user.email }).populate("cart")
    res.render('shop', { navshop: true, navprofile: false, config, success, error, user, products, })
})

router.get('/product/:productid', UserisLoggedin, async function (req, res) {
    let error = req.flash("error")
    let success = req.flash("success")
    let product = await productModel.findOne({ _id: req.params.productid }).populate("productimage").populate("productsize").populate("productcolor")
    let products = await productModel.find().populate("productimage")
    let user = await usersModel.findOne({ email: req.user.email }).populate("cart")
    res.render('product', { navshop: true, navprofile: false, config, success, error, user, product, products, })
})

router.get('/addtocart/:productid', UserisLoggedin, async function (req, res) {
    req.flash("success", "Added to cart")
    let user = await usersModel.findOne({ email: req.user.email })
    user.cart.push(req.params.productid)
    await user.save()
    res.redirect("/shop")
})

router.post('/update', UserisLoggedin, async function (req, res) {
    req.flash("success", "Address Chnaged")
    const { address } = req.body; 

    try {
        let user = await usersModel.findOne({ email: req.user.email });

        if (!user) {
            return res.status(404).send("User not found");
        }

        user.address = address;

        await user.save();

        res.redirect('/profilechanges');
    } catch (error) {
        res.status(500).send("Failed to update address");
    }
});

router.get('/removefromcart/:productid', UserisLoggedin, async function (req, res) {
    req.flash("success", "Removed from cart")
    let user = await usersModel.findOne({ email: req.user.email })
    user.cart.pull(req.params.productid)
    await user.save()
    res.redirect("/cart")
})

router.get('/cart', UserisLoggedin, async function (req, res) {
    let error = req.flash("error")
    let success = req.flash("success")
    let user = await usersModel.findOne({ email: req.user.email }).populate("cart")
    let product = await productModel.find().populate()
    res.render('cart', { navshop: true, navprofile: false, config, error, success, user, product })
})

router.get('/orders', UserisLoggedin, async function (req, res) {
    let success = req.flash("order canceld")
    let user = await usersModel.findOne({ email: req.user.email }).populate("cart").populate("orders")
    let product = await productModel.find().populate()
    res.render('orders', { navshop: true, navprofile: false, config, user, product, success })
})

router.get('/orderconfirmation', UserisLoggedin, async function (req, res) {
    try {
        const productIds = req.query.ids.split(',');
        if (!productIds || productIds.length === 0) {
            return res.status(400).send('No product IDs provided');
        }

        let user = await usersModel.findOne({ email: req.user.email }).populate("cart")
        let product = await productModel.find({ _id: { $in: productIds } });

        if (user.cart.length === 0) {
            return res.render('404');
        } else {
            res.render('payment', { product , user });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/purchase', UserisLoggedin, async function (req, res) {
    try {
        const productIds = JSON.parse(req.body.productIds); 

        if (!productIds || productIds.length === 0) {
            return res.status(400).send('No product IDs provided for purchase');
        }

        let user = await usersModel.findOne({ email: req.user.email }).populate("cart").populate("orders");

        user.orders.push(...productIds);
        user.cart = user.cart.filter(p => !productIds.includes(p._id.toString()));

        await user.save();
        res.redirect('/orders'); 
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/cancelorder/:productid', UserisLoggedin, async function (req,res){
    req.flash("success", "Removed from cart")
    let user = await usersModel.findOne({ email: req.user.email }).populate("cart").populate("orders")
    let product = await productModel.find().populate()
    user.orders.pull(req.params.productid)
    await user.save()
    res.redirect("/orders")
})

router.get('/profilechanges', UserisLoggedin, async function (req, res) {
    let error = req.flash("error")
    let success = req.flash("success")
    let user = await usersModel.findOne({ email: req.user.email }).populate("cart")
    res.render('profilechanges', { navshop: true, navprofile: false, config, error, success, user })
})


module.exports = router