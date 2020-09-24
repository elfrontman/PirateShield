const express = require("express");
const app = express();
const http = require("http").Server(app)
const io = require("socket.io")
const port = 500
const socket = io(http)
const url_api = "0.0.0.0"

const  Chat  = require("./models/ChatSchema");
const  connect  = require("./dbconnection");

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.get('/', function(req, res){
  res.send('<h1>Running chat server</h1>');
});

app.get('/chat/:token/:user', (req, res) => {
	
	connect.then( db => {
		Chat.aggregate([
			{ "$match": { "operativo": req.params.token } },
			{ "$sort": { "createdAt": -1 } },
			{
				$group: {
					_id: {"chat_id":"$chat_id"},
					message: {"$first": "$message"},
					sender: {"$first": "$sender"},
					type: {"$first": "$type"},
					user_sender: {"$first": "$user_sender"},
					user_receiver: {"$first": "$user_receiver"},
					time: {"$first": "$createdAt"},

				}
			}
		], (err, chats) => {
			if (err) throw err;
			res.json(chats.sort( (a, b) => b.time - a.time ));
			
		})
		
	})
})

app.get('/chat_all/:chat_id', (req, res) => {
	
	connect.then( db => {
		Chat.find({chat_id:req.params.chat_id}).then( chats =>{
			res.json(chats)	
		})
	})
})

socket.on("connection", socket =>{
	console.log("user conected with id: " + socket.id);

	socket.emit("chat-token", {token: socket.id});

	socket.on("create", (token) => {
		console.log('created token client: ', token)
		socket.join(token);
	})

	socket.on("disconnect", () =>{
		console.log("user disconect")
	})

	socket.on("send-message", (msg) => {
		socket.broadcast.to(msg.chat_id).emit("received", msg);
		socket.broadcast.emit("update_admin", msg.chat_id);

		connect.then( db => {
			console.log("Connected DB Mongo")

			let chatMessage = new Chat({
				message: msg.message,
				sender: Number(msg.sender),
				receiver: Number(msg.receiver),
				type: msg.type,
				user_sender: msg.user_sender,
				user_receiver: msg.user_receiver,
				chat_id: msg.chat_id,
				operativo: msg.operativo,
			})

			chatMessage.save()
		})
	})

	socket.on("send-file", (msg) => {
		socket.broadcast.to(msg.token).emit("received", msg)
		console.log(msg)
		connect.then( db => {
			console.log("Connected DB Mongo")

			let chatMessage = new Chat({
				 message: msg.message,
				 sender: msg.token,
				 isAdmin: msg.isAdmin,
				 ip: msg.ip,
				 user_name: msg.user_name,
				 type: "Image"
			})

			chatMessage.save()
		})
	})
});

http.listen(port, url_api,() =>{
	console.log("Conected on port: " + port)
});
