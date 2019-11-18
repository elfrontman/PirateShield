const  mongoose  = require("mongoose");
mongoose.Promise  = require("bluebird");
const  url  =  "mongodb://ec2-54-89-251-211.compute-1.amazonaws.com:27017/chat";
const  connect  =  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,  });
module.exports  =  connect;