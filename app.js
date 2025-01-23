const express = require('express')
const app = express()
const config = require('config')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const flash = require('connect-flash')
const dbgr = require('debug')(`${config.get("NODE_ENV")}:Port`)
const index = require('./routes/index')
const ownersRouter = require('./routes/ownersRouter')
const productsRouter = require('./routes/productsRouter')
const usersRouter = require('./routes/usersRouter')
const db = require('./connection/mongoose-connection')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  })
)

app.use(flash())

app.set("view engine", 'ejs')
app.use(express.static('public'))

app.use("/", index)
app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)


app.listen(`${config.get("PORT")}`)
dbgr("Server is Listing On Port: " + `${config.get("PORT")}`)