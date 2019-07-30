$(document).foundation()

$(document).ready(function(){
	var input_file = $('[type=file]').parent('p')
	input_file.addClass('input-file');

	$('[type=file]').change(function(){
		$(this).parent().append('<a>' + this.value + '</a>')
	})

	var pointer = $('<div id="pointer-marker"></div>');
	var layer = $('<div id="layer-marker"></div>');

	$('.select-point').append(layer)

	var offsetX = $('#id_marker_x').val()
	var offsetY = $('#id_marker_y').val()

	if(offsetY > 0 || offsetX > 0){
		pointer.css({top: offsetY - 15 , left:offsetX - 15});	
		$('.select-point').append(pointer);
	}


	$('.select-point').click(function(event){
		event.preventDefault();
		$('#id_marker_x').val(event.offsetX)
		$('#id_marker_y').val(event.offsetY)

		pointer.css({top: event.offsetY - 15 , left:event.offsetX - 15});

		$(this).append(pointer);
	})

	$('#id_is_active').parents('p').addClass('check-row')
	$('#clear_id-clear, [for=image-clear_id]').remove();
});
