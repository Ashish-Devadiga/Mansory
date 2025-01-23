const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const userModel = require('../models/users-model')
const { generateToken } = require("../utils/genaratetoken")
const { hashPassword } = require('../utils/hash')

module.exports.registerUser = async (req, res) => {

   try {
      let { fullname, email, contactNo, password } = req.body

      let hash = await hashPassword(password)
      let user = await userModel.findOne({ email: email })

      if (user) {
         req.flash("error", "User Already Exist")
         return res.redirect("/register")
      }

      else {
         let user = await userModel.create({
            fullname,
            email,
            contactNo,
            password: hash,
         });

         let token = generateToken(user)
         res.cookie("token", token)
         req.flash("success", "Account Created Sucessfully")
         return res.redirect("/shop")
      }

   }
   catch (err) {
      req.flash("error", "Missing Credentials *")
      return res.redirect("/register")
   };
};

module.exports.loginUser = async (req, res) => {

   let { email, password } = req.body

   let user = await userModel.findOne({ email: email })
   if (!user) {
      req.flash("error", "User not found")
      return res.redirect("/")
   }

   else {
      bcrypt.compare(password, user.password, function (err, result) {

         if (result) {
            let token = generateToken(user)
            res.cookie("token", token)
            req.flash("success", "Login Sucessfully")
            res.redirect('/shop')
         }

         else {
            req.flash("error", "Email or Password incorrect")
            return res.redirect("/")
         }
      })
   }
}

module.exports.logout = async (req, res) => {
   res.cookie("token", "")
   res.redirect('/')
}

