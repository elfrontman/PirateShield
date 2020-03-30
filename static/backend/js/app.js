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



$(document).ready(function(){
	var input_file = $('[type=file]').parent('p')
	input_file.addClass('input-file');

	$('[type=file]:not(#filechooser)').change(function(){
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
});


