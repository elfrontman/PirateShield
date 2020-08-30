(function($){

	$(document).ready(function(){

		var flag = $('#id_image_product').val();
		$('#id_image_product').click(function(){
			if(this.value != flag){
				console.log(this.value)
				flag = this.value;
				$('[name="_continue"]').click()
			}
		})

		var pointer = $('<div id="pointer-marker"></div>');
		var layer = $('<div id="layer-marker"></div>');

		$('.select-point').append(layer)

		var offsetX = $('#id_marker_x').val()
		var offsetY = $('#id_marker_x').val()

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
	})
})(jQuery);