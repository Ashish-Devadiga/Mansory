const mongoose = require('mongoose')
const config = require("config")
const dbgr = require("debug")(`${config.get("NODE_ENV")}:mongoose`)

mongoose.connect(`${config.get('MONGODB_URI')}` + "/" + `${config.get("DB")}`)
  .then(function(){
    dbgr("conected");
}).catch(function(err){
    dbgr(err);
})


module.exports = mongoose.connection;