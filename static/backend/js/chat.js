(function() {
	var ip_chat = 'ec2-3-84-219-164.compute-1.amazonaws.com:500';
	var  socket = io(ip_chat);

	socket.emit('create', $("#token_chat").val())
	getChat();

	var is_brand = $('#is_brand').length > 0;

	$(".chat-form").submit(function(e) {
		e.preventDefault(); // prevents page reloading

		var msg = {
			message:$("#message").val(), 
			token: $("#token_chat").val(), 
			isAdmin: !is_brand,
			type: 'String'
		}

		console.log(msg)

		socket.emit("send-message", msg);
		appendMessage(msg)
		moveScroll()
		
		$("#message").val("");

		return  true;
	});

	$('#filechooser').change(function(e){
		var reader = new FileReader();

		reader.onload = function(evt){
			var msg = {
				message: evt.target.result, 
				token: $("#token_chat").val(), 
				isAdmin: !is_brand,
				type: 'Image'
			}
			socket.emit('send-file', msg)
			appendMessage(msg)
			moveScroll()
		}

		reader.readAsDataURL(e.originalEvent.target.files[0])
	})

	socket.on('received', function(msg){
		appendMessage(msg)
		moveScroll()
	})

	socket.on('load-chat', function(msg){
		console.log(msg)
	})

	function appendMessage(msg){
		var message = $('<div></div>');
		switch (msg.type) {
			case "Image":
				message.append('<img src="'+msg.message+'">');
				break;
			
			default:
				message.append('<span>'+msg.message+'</span>');
				break;
		}

		var date = moment(msg.createdAt)
		

		message.append('<span class="time">'+date.format("MM-DD-YY hh:mm:ss a")+'</span>');
		message.addClass('message');

		if(is_brand && !msg.isAdmin){
			message.addClass('isAdmin');
		}

		if(!is_brand && msg.isAdmin)
			message.addClass('isAdmin');	

		

		

		$('.view-chat').append(message)

		
	}

	function moveScroll(animated=true){

		var timing = animated ? 100 : 0

		$(".view-chat").animate({
		  scrollTop: $('.view-chat')[0].scrollHeight - $('.view-chat')[0].clientHeight
		}, timing);
	}


	function getChat(){
		$.ajax({
			url: ip_chat + '/chat/'+$("#token_chat").val(),
			success: function(data){
				console.log(data)

				data.map( function(item){
					appendMessage(item);
					moveScroll(false);
				})
			}
		})
	}
})();