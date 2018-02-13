/*
 *
 *  ||    // \\ || )) || \\ // \\ || \\   // \\  || \\
 *  ||    ||=|| ||=)  ||_// ||=|| ||  )) ((   )) ||_//
 *  ||__| || || ||_)) || \\ || || ||_//   \\_//  || \\
 *
 *
 * Designed, built, and released under MIT license by @donini. Learn more at
 * https://github.com/donini/labrador-jekyll-theme.
 */

$(document).ready(function () { 
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		// ABOUT
		if (scroll >= 400) { $('.text-about p').addClass('show'); $('.section-bullets').removeClass('section-bullets-white'); }
		if (scroll <= 200) { $('.text-about p').removeClass('show'); $('.section-bullets').addClass('section-bullets-white'); }
		// BASE
		if (scroll >= 1000) { $('.text-base p').addClass('show'); $('.section-bullets').addClass('section-bullets-white'); }
		if (scroll <= 800) { $('.text-base p').removeClass('show'); $('.section-bullets').removeClass('section-bullets-white'); }
		// QUOTE
		if (scroll >= 2000) { $('.text-quote p').addClass('show'); $('.section-bullets').addClass('section-bullets-white'); }
		if (scroll >= 2800 || scroll <= 1200) { $('.text-quote p').removeClass('show');$('.section-bullets').removeClass('section-bullets-white'); }
		// LANGUAGE
		if (scroll >= 1580) { $('.profile-photo').addClass('profile-photo-white'); }
		if (scroll >= 2280 || scroll <= 1580) { $('.profile-photo').removeClass('profile-photo-white'); }
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
