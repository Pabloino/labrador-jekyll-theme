$(document).ready(function () { 
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		// ABOUT
		if (scroll >= 400) { $('.section-bullets').addClass('section-bullets-black'); }
		if (scroll <= 200 || scroll >= 800)  { $('.section-bullets').removeClass('section-bullets-black'); }
		// PROCESAMIENTO
		if (scroll > 1600) { $('.section-bullets').addClass('section-bullets-black'); }
		if ((scroll >= 800 && scroll <= 1400) || scroll >= 7400) { $('.section-bullets').removeClass('section-bullets-black'); }
		// LANGUAGE
		if (scroll >= 15580) { $('.profile-photo').addClass('profile-photo-white'); }
		if (scroll >= 16280 || scroll <= 15580) { $('.profile-photo').removeClass('profile-photo-white'); }
		console.log(scroll);
	});

	$('body').sectionScroll();

	$('.profile-photo').addClass('profile-photo-show');

	/* MENU RESPONSIVE */
	$('.btn-responsive-menu').click(function(e) {
		e.preventDefault();
		var menu = $('.responsive-menu');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
	$('.responsive-menu ul li a').click(function(e) {
		// e.preventDefault();
		$('.responsive-menu').removeClass('open');
	})
});
