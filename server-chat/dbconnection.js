const  mongoose  = require("mongoose");
mongoose.Promise  = require("bluebird");
const  url  =  "mongodb://ec2-34-238-115-63.compute-1.amazonaws.com:27017/chat";
const  connect  =  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,  });
module.exports  =  connect;