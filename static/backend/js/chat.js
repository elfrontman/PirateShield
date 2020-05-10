(function() {
	//var ip_chat = 'http://190.60.205.188:500';
	//var ip_service = 'http://190.60.205.188:8080/backend';
	
	var ip_chat = 'http://192.168.0.16:500';
	var ip_service = 'http://192.168.0.16:8000/backend';

	var  socket = io(ip_chat);

	var _token_chat, _token_chat_marca;

	socket.emit('create', $("#token_chat").val())
	if($("#token_chat").length > 0 && $("#token_chat").val().length == 0){
		socket.on('chat-token', function(token){
			saveChatToket(token.token).then(function(){
				$("#token_chat").val(token.token)
				_token_chat = token.token;
				getChat('operativo');	
			})
			
		})	
	}else{
		getChat('operativo');
	}

	socket.emit('create', $("#token_chat_marca").val())
	if($("#token_chat_marca").length > 0 && $("#token_chat_marca").val().length == 0){
		socket.on('chat-token', function(token){
			saveChatToket(token.token).then(function(){
				$("#token_chat_marca").val(token.token)
				_token_chat_marca = token.token;
				getChat('marca');	
			})
			
		})	
	}else{
		getChat('marca');
	}
	

	var is_brand = $('#is_brand').length > 0;

	$(".chat-form").submit(function(e) {
		e.preventDefault(); // prevents page reloading

		let token_chat, chat;
		let message = $(this).find('[name="message"]').val()
		
		if($(this).hasClass('chat-marca')){
			token_chat = $("#token_chat_marca").val()
			chat = 'marca'
		}

		if($(this).hasClass('chat-operativo')){
			token_chat = $("#token_chat").val()
			chat = 'operativo'
		}

		var msg = {
			message:message, 
			token: token_chat, 
			isAdmin: !is_brand,
			type: 'String',
			ip: $('#ip_client').val()
		}

		socket.emit("send-message", msg);
		appendMessage(msg, chat)
		moveScroll()
		
		$(this).find('[name="message"]').val("");

		return  true;
	});

	$('.filechooser').change(function(e){
		var reader = new FileReader();


		let token_chat, chat;
		
		if($(this).parents('form').hasClass('chat-marca')){
			token_chat = $("#token_chat_marca").val()
			chat = 'marca'
		}

		if($(this).parents('form').hasClass('chat-operativo')){
			token_chat = $("#token_chat").val()
			chat = 'operativo'
		}

		reader.onload = function(evt){
			var msg = {
				message: evt.target.result, 
				token: token_chat, 
				isAdmin: !is_brand,
				type: 'Image',
				ip: $('#ip_client').val()
			}
			socket.emit('send-file', msg)
			appendMessage(msg, chat)
			moveScroll(chat)
		}

		reader.readAsDataURL(e.originalEvent.target.files[0])
	})

	socket.on('received', function(msg){
		if(msg && msg.token == $("#token_chat").val()){
			appendMessage(msg, 'operativo')	
			moveScroll('operativo')
		}

		if(msg && msg.token == $("#token_chat_marca").val()){
			appendMessage(msg, 'marca')	
			moveScroll('marca')
		}

		
		
	})

	socket.on('load-chat', function(msg){
		console.log(msg)
	})

	function appendMessage(msg, chat){

		var message = $('<div></div>');



		message.append('<span class="user">'+msg.ip+'</span>');
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

		

		if(chat == 'marca'){
			$('.view-chat.chat-marca').append(message)
		}

		if(chat == 'operativo'){
			$('.view-chat.chat-operativo').append(message)	
		}

		

		
	}

	function moveScroll(chat, animated=true){

		var timing = animated ? 100 : 0

		var view_chat = chat == 'operativo' ? '.view-chat.chat-operativo' : '.view-chat.chat-marca'

		$(view_chat).animate({
		  scrollTop: $(view_chat)[0].scrollHeight - $(view_chat)[0].clientHeight
		}, timing);
	}


	function getChat(chat){

		let token_chat = chat == 'operativo' ? $("#token_chat").val(): $("#token_chat_marca").val()


		if(token_chat){
			$.ajax({
				url: ip_chat + '/chat/'+token_chat,
				crossDomain: true,
				dataType: "json",

				success: function(data){

					data.map( function(item){
						appendMessage(item, chat);
						moveScroll(chat, false);
					})
				}, error: function(err){
					console.log(err)
				}
		})
		}

		
	}


	function saveChatToket(token_chat){
		return new Promise(function(resolve, reject){
			$.ajax({
				url: ip_service + '/token_chat/'+$("#token_chat").val(),
				data: {'token_chat': token_chat, 'token': $('#token').val()},
				crossDomain: false,
				type: 'post',
				dataType: "json",
				// beforeSend: function(request) {
    // 				request.setRequestHeader("X-CSRFToken", csrftoken);
  		// 		},
				success: function(data){
					if(data.created){
						resolve(token_chat)
					}else{
						resolve(data.token)
					}
					
				}, error: function(err){
					reject(err);
				}
			})
		})
		
	}
})();