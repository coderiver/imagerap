head.ready(function() {

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
	console.log($('body').html());
});