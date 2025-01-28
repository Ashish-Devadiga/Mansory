const mongoose = require('mongoose')
const config = require("config")
const dbgr = require("debug")(`${config.get("NODE_ENV")}:mongoose`)

DB = "mongodb+srv://Ashish:aQTcc9dU7xnvneA2@mansory.gvprq.mongodb.net/?retryWrites=true&w=majority&appName=Mansory"
mongoose.connect(DB)
  .then(function(){
    console.log(err)
    dbgr("conected");
}).catch(function(err){
    dbgr(err);
})


module.exports = mongoose.connection;
