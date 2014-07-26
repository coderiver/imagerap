head.ready(function() {
	$('[data-step]').on('click', function(){

		var range = $(this).parent().children('.zoom__range').children('input');
		console.log(range);
        var step = $(this).data('step');
        var stepped;
        try {
        	vvv = parseInt(range.val()) + parseInt(step);
            range.val(vvv);
            stepped = true;
        } catch(e){}
        if(stepped){
            range
                .trigger('input')
                .trigger('change');

        }
        return false;
    });

    $('.zoom__range input').change(function(event) {
    	scale = $(this).val();
    	$('.pic__wrap').css('transform', 'scale('+scale+')');
    });
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	b = $('body');

	$('.users__new').click(function(event) {
		$('.users__drop').toggleClass('is-active');
	});

	$('.l-comments__toggle').click(function(event) {
		b.toggleClass('is-commentshidden');
	});
	$('.preview__title,.preview__showpreview').click(function(event) {
		$('.preview').toggleClass('is-hidden');
	});

	$('.t-brush').click(function(event) {
		$('.brushes').toggleClass('is-active');
	});

	$('.top__logo,.l-files__toggle').click(function(event) {
		$('.l-files').toggleClass('is-visible');
	});

	$('.notesandmarks').click(function(event) {
		$(this).toggleClass('is-active');
	});
	$('.showtools,.hidetools').click(function(event) {
		b.toggleClass('is-centertools');
	});
	$('.link').click(function(event) {
		$(this).toggleClass('is-active');
	});
});