$(document).foundation()

var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

function printTable(response) {
	console.log(response)

	$('#list_operativo').empty();

	const formatDate = (date) => {
		return new Intl.DateTimeFormat('en-US').format(new Date(date));
	}

	response.forEach(item => {
		let row = `<li class="grid-x ${item.token}" >
				<div class="cell small-10 medium-10">
					<div class="info-row ">
						<h3>${item.name} - ${item.user.first_name} ${item.user.last_name}</h3>		
						<span><strong>Token: ${item.token}</strong></span>`;
			
			if (item.is_ready) {
				row +=`<span class="label success"><strong>Operativo Activo</strong></span><br>`;	
			}
			
			
			row += `<span><strong>Activo desde:</strong> ${formatDate(item.activation)}</span> - 
						<span><strong>Valido hasta:</strong> ${formatDate(item.expiration)}</span>
						<span><strong>Cantidad dispositivos:</strong> ${item.connections}</span>
					</div>	
				</div>
				<div class="cell auto content-buttons">
					<div class="small button-group">`;

			if (!item.is_ready && item.is_active) {
				row += `<a href="/backend/operativos/activate/${item.id}"  class="button tiny expanded">Activar operativo</a>`;
			}
		
			if (item.is_active) { 
				row += `<a href="/backend/operativos/invalidate/${item.id}"  class="button tiny alert expanded">Cerrar operativo</a>
				<a href="/backend/operativos/${item.id}" class="button tiny expanded">Editar</a>`;
			}
		
			if (!item.is_active) { 
				row += `<a href="/backend/operativos/view/${item.id}" class="button tiny expanded">Ver</a>`;
			}
			
			row += ` <a href="/backend/operativos/connetions/${item.id}" class="button tiny warning expanded">Conexiones</a>
						<a href="/backend/operativos/chat/${item.id}" class="button tiny success expanded">Chat</a>
						
					</div>
				</div>
			</li>`;
			$('#list_operativo').append(row);
	})

	

	
	

	

}


function getOperativosList() {
	var send_data = {
		filter_ops: $('#filter_ops').val()
	}
	const url = $('#list_operativo').attr('url');

	const params = {
		method: 'POST',
		body: JSON.stringify(send_data),
		headers: new Headers( {
			'Content-Type': 'application/json',
			'X-CSRFToken': csrftoken
        })

	}

	fetch(url, params)
		.then(response => response.json())
		.then(data => printTable(data))
		.catch( error => console.log('error:', error))
	
}


$(document).ready(function(){
	var input_file = $('[type=file]').parent('p')
	input_file.addClass('input-file');

	$('[type=file]:not(.filechooser)').change(function(){
		$(this).parent().append('<a>' + this.value + '</a>')
	})

	var pointer = $('<div id="pointer-marker"></div>');
	var layer = $('<div id="layer-marker"></div>');

	$('.select-point').append(layer)

	var offsetX = $('#id_marker_x').val()
	var offsetY = $('#id_marker_y').val()

	if(offsetY > 0 || offsetX > 0){
		pointer.css({top: (offsetY) + '%' , left:(offsetX) + '%'});	
		$('.select-point').append(pointer);
	}


	$('.select-point').click(function(event){
		event.preventDefault();

		let size = 360;


		$('#id_marker_x').val((event.offsetX * 100 / size) - 7)
		$('#id_marker_y').val((event.offsetY * 100 / size) - 7)

		pointer.css({top: ($('#id_marker_y').val()) + '%' , left:($('#id_marker_x').val()) + '%'});

		$(this).append(pointer);
	})

	$('#id_is_active').parents('p').addClass('check-row')
	$('#clear_id-clear, [for=image-clear_id]').remove();


	$('.parent-select').click(function (event) {
		console.log(event)
		event.stopPropagation();
		if(this.checked){
			$(this).parents('li').find(' > ul li input[type=checkbox]').prop('checked', true)
		}else{
			$(this).parents('li').find(' > ul li input[type=checkbox]').prop('checked', false)
		}
	})

	$('.child-select').click(function (event) {
		event.stopPropagation();
		if(this.checked){
			$(this).parents('.list-parent').find('.parent-select').prop('checked', true)
		}
	})

	$('#mark-form').submit(function(event){

		if ($('#id_marker_x').val().length <= 0 && $('#id_marker_y').val().length <= 0){
			alert("Seleccione una punto en la imagen");
			return false;
		}

		return true;

	})

	$('#filter_ops').change(function (event) {
		//$('#form_filter').submit();
		getOperativosList();
	})
});

(function () {
	let unReadList = JSON.parse(localStorage.getItem('unReadAdmin'));
	unReadList = unReadList ? unReadList : [];

	const total = unReadList.length > 0 ? unReadList.map(x => x.messages).reduce((acc, curr) => acc + curr) : 0;
	//$('.chat-notification .badge').html(total);

	if (total == 0) {
		$('.chat-notification .badge').hide();	  
	}

	unReadList.map(op => {
		if (op.messages > 0) {
			$(`.op-${op.token} .badge`).show();
			$(`.op-${op.token} .badge`).html(op.messages);	
		} else {
			console.log($(`.op-${op.token} .badge`))
			$(`.op-${op.token} .badge`).hide();
		}
	})


	localStorage.setItem('unReadAdmin', JSON.stringify(unReadList));

	let socket = io(CHAT_API);

	socket.emit('create', 'adminnotify');
	socket.on('notification', (id) => { 
		const op = {
			token: id
		};

		const existOp = unReadList.find(x => x.token === id);

		if (!existOp) {
			op.messages = 1;
			unReadList.push(op);
		} else {
			existOp.messages++;
		}
		localStorage.setItem('unReadAdmin', JSON.stringify(unReadList));
		
		const total = unReadList.length > 0 ? unReadList.map(x => x.messages).reduce((acc, curr) => acc + curr) : 0;
		unReadList.map(op => {
			if (op.messages > 0) {
				$(`.op-${op.token} .badge`).show();
				$(`.op-${op.token} .badge`).html(op.messages);	
			} else {
				console.log($(`.op-${op.token} .badge`))
				$(`.op-${op.token} .badge`).hide();
			}
		})
		//$('.chat-notification .badge').html(total);
	})	
})();


