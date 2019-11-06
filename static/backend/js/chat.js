(function() {
	var  socket = io('http://localhost:500');

	socket.emit('create', $("#token_chat").val())

	$(".chat-form").submit(function(e) {
		e.preventDefault(); // prevents page reloading
		socket.emit("send-message", {text:$("#message").val(), token: $("#token_chat").val(), isAdmin: true});
		appendMessage($("#message").val(), true)
		$("#message").val("");

		return  true;
	});

	socket.on('received', function(msg){
		appendMessage(msg.text, false)
	})

	function appendMessage(text, isAdmin){
		var message = $('<div></div>');
		message.append('<span>'+text+'</span>');
		message.addClass('message');

		if(isAdmin)
			message.addClass('isAdmin');

		$('.view-chat').append(message)
	}
})();