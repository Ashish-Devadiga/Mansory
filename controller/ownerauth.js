const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const ownerModel = require('../models/owner-model')
const { generateTokenOwner } = require("../utils/genaratetoken")
const { hashPassword } = require('../utils/hash')

module.exports.registerOwner = async (req, res) => {

    try {
        let { fullname, email, contactNO, gstin, password } = req.body

        let owner = await ownerModel.find()
        if (owner.length > 0) {
            req.flash("error", "Unauthorized service")
            res.redirect("/owners/admin")
        }

        else {
            let hash = await hashPassword(password)

            let owner = await ownerModel.create({
                fullname,
                email,
                contactNO,
                gstin,
                password: hash,
            })
            let ownertoken = generateTokenOwner(owner)
            res.cookie("ownertoken", ownertoken)
            req.flash("success", "Account Created Sucessfully")
            res.redirect('/owners/adminpannel')
        }
    }
    catch (err) {
        req.flash("error", "Missing Credentials *")
        return res.redirect("/owners/admin")
    };
}

module.exports.LoginOwner = async (req, res) => {

    let { email, password } = req.body

    let owner = await ownerModel.findOne({ email: email })
    if (!owner) {
        req.flash("errorlogin", "Owner not found")
        return res.redirect("/owners/admin")
    }

    else {
        bcrypt.compare(password, owner.password, function (err, result) {

            if (result) {
                let ownertoken = generateTokenOwner(owner)
                res.cookie("ownertoken", ownertoken)
                req.flash("success", "Login Sucessfully")
                res.redirect('/owners/adminpannel')
            }

            else {
                req.flash("errorlogin", "Email or Password incorrect")
                return res.redirect("/owners/admin")
            }
        })
    }
}

module.exports.logout = async (req, res) => {
    res.cookie("ownertoken", "")
    res.redirect('/owners/admin')
}

