(function() {
	var ip_chat = 'http://190.60.205.188:500';
	var ip_service = 'http://190.60.205.188:8080/backend';
	//var ip_chat = '127.0.0.1:500';
	var  socket = io(ip_chat);

	socket.emit('create', $("#token_chat").val())

	if($("#token_chat").val().length == 0){
		socket.on('chat-token', function(token){
			saveChatToket(token.token).then(function(){
				$("#token_chat").val(token.token)
				getChat();	
			})
			
		})	
	}else{
		getChat();
	}
	

	

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
			crossDomain: true,
			dataType: "json",
			success: function(data){
				console.log(data)

				data.map( function(item){
					appendMessage(item);
					moveScroll(false);
				})
			}, error: function(err){
				console.log(err)
			}
		})
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