const mongoose = require('mongoose')
const config = require("config")
const dbgr = require("debug")(`${config.get("NODE_ENV")}:mongoose`)

db = "mongodb+srv://Ashish:aQTcc9dU7xnvneA2@mansory.gvprq.mongodb.net/?retryWrites=true&w=majority&appName=Mansory"
mongoose.connect(DB)
  .then(function(){
    dbgr("conected");
}).catch(function(err){
    dbgr(err);
})


module.exports = mongoose.connection;
