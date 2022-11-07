$('nav a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	const infosIndex = $(this).attr('href');

	targetOffset = $(infosIndex).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset - 120
	}, 900);
});
