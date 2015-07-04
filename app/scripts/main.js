/* jshint devel:true */
$(document).foundation();

$('.search span.icon-search').on('click', function(){
	var $input = $(this).siblings('input')
	$input.toggleClass('open');
	if ($input.hasClass('open')) {
		$input.focus();
	} else {
		$input.blur();
	}
});


$('.view a').on('click', function(e){

	e.preventDefault();
	$(this).addClass('active')
	$(this).siblings('a').removeClass('active')

	var classname = $(this).children('span').attr('class'),
		type = classname.split('icon-')[1];

	$('.events').removeClass('list grid');
	$('.events').addClass(type);

});


$('.categories > ul > li').on('click', function(){
	console.log('hi');
	$('.categories ul > ul, .categories span.icon-arrow').toggleClass('active');
})
