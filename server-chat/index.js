const express = require("express");
const app = express();
const http = require("http").Server(app)
const io = require("socket.io")
const port = 500
const socket = io(http)

app.get('/', function(req, res){
  res.send('<h1>Running chat server</h1>');
});

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
		console.log("message: " + msg.text)
		console.log("token: " + msg.token)
		socket.broadcast.to(msg.token).emit("received", msg);
	})
});

http.listen(port, () =>{
	console.log("Conected on port: " + port)
});