const express = require("express");
const app = express();
const http = require("http").Server(app)
const io = require("socket.io")
const port = 500
const socket = io(http)
const url_api = "ec2-3-84-219-164.compute-1.amazonaws.com"
//const url_api = "127.0.0.1"

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

app.get('/chat/:token', (req, res) => {
	connect.then( db => {
		Chat.find({sender:req.params.token}).then( chats =>{
			res.json(chats)	
		})
	})
})

socket.on("connection", socket =>{
	console.log("user conected with id: " + socket.id);

	socket.emit("chat-token", {token: socket.id});

	socket.on("create", (token) => {
		socket.join(token);
	})

	socket.on("disconnect", () =>{
		console.log("user disconect")
	})

	socket.on("send-message", (msg) =>{
		socket.broadcast.to(msg.token).emit("received", msg);

		connect.then( db => {
			console.log("Connected DB Mongo")

			let chatMessage = new Chat({
				 message: msg.message,
				 sender: msg.token,
				 isAdmin: msg.isAdmin,
				 type: "String"
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
				 type: "Image"
			})

			chatMessage.save()
		})
	})
});

http.listen(port, url_api,() =>{
	console.log("Conected on port: " + port)
});