const  mongoose  = require("mongoose");
mongoose.Promise  = require("bluebird");

const  url  =  "mongodb+srv://elfrontman:Andres92@cluster0-rzedj.mongodb.net/chat";
//const  url  =  "mongodb://localhost:27017/chat";
const  connect  =  mongoose.connect(url, 
	{ 
		useNewUrlParser: true, 
		useUnifiedTopology: true, 
		server: {
			socketOptions: {
				socketTimeoutMS: 6000000	
			}
			
		}
	});
module.exports  =  connect;