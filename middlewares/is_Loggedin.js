const jwt = require('jsonwebtoken')
const userModel = require('../models/users-model')
const ownerModel = require('../models/owner-model')

const UserisLoggedin = async function (req, res, next) {

    if (!req.cookies.token) {
        req.flash("error", "You need to login first")
        return res.redirect("/")
    }

    try {
        let decode = jwt.verify(req.cookies.token, process.env.JWT_KEY)
        let user = await userModel.findOne({ email: decode.email })
            .select("-password")
        req.user = user;
        next()
    }

    catch (err) {
        req.flash("error", "Somethig Went Wrong")
        res.redirect("/")
    };
}

const Ownerisloggedin = async function (req, res, next) {
    if (!req.cookies.ownertoken) {
        req.flash("errorlogin", "You need to login first")
        return res.redirect("/owners/admin")
    }

    try {
        let decode = jwt.verify(req.cookies.ownertoken, process.env.JWT_KEY)
        let owner = await ownerModel.findOne({ email: decode.email })
            .select("-password")
        req.owner = owner;
        next()
    }

    catch (err) {
        req.flash("errorlogin", "Somethig Went Wrong")
        res.redirect("/owners/admin")
    };

}

module.exports.UserisLoggedin = UserisLoggedin
module.exports.Ownerisloggedin = Ownerisloggedin