/* jshint devel:true */
$(document).foundation();



// Search Box Toggle

$('.search span.icon-search').on('click', function(){
	var $input = $(this).siblings('input');
	$input.toggleClass('open');
	
	if ($input.hasClass('open')) {
		$input.focus();
	} else {
		$input.blur();
	}
});


// List / Grid View switcher

$('.view a').on('click', function(e){

	e.preventDefault();
	$(this).addClass('active');
	$(this).siblings('a').removeClass('active');

	var classname = $(this).children('span').attr('class'),
		type = classname.split('icon-')[1];

	$('.events').removeClass('list grid');
	$('.events').addClass(type);

});


// Events Category Dropdown

$('.categories > ul > li').on('click', function(){
	console.log('hi');
	$('.categories ul > ul, .categories span.icon-arrow').toggleClass('active');
});


// Slideshow Module

$('.slideshow a').on('click', function(e){
	e.preventDefault();
	var $current = $(this).closest('.slideshow'),
		$currentSlide = $current.find('li.slide.active, li.caption.active'),
		$firstSlide = $current.find('li.slide:first-child, li.caption:first-child'),
		$lastSlide = $current.find('li.slide:last-child, li.caption:last-child');

	if (e.currentTarget.className === 'arrowright') {
		if ($currentSlide.next()[0] !== undefined) {
 			$currentSlide.removeClass('active').next().addClass('active');
		} else {
			$currentSlide.removeClass('active');
			$firstSlide.addClass('active');
		}
	} else {
		if ($currentSlide.prev()[0] !== undefined) {
			$currentSlide.removeClass('active').prev().addClass('active');
 		} else {
			$currentSlide.removeClass('active');
			$lastSlide.addClass('active');
 		}
	}
});


// Highlights Module

$('.highlights a.arrowright, .highlights a.arrowleft').on('click', function(e){
	e.preventDefault();
	var highlightWidth = $('.highlight').outerWidth(true),
		forwards = '-=' + highlightWidth + 'px',
		backwards = '+=' + highlightWidth + 'px';
		
	if ($(this)[0].className === 'arrowright') {

		console.log($('.tiles').css('margin-left'));
		$('.tiles').css('margin-left', forwards);
	
	} else {
	
		$('.tiles').css('margin-left', backwards);
	
	}

});





