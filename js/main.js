"use strict";
jQuery(document).on('ready', function() {
	/* -------------------------------------
	 PRELOADER
	 -------------------------------------- */
	jQuery("#status").delay(2000).fadeOut();
	jQuery("#preloader").delay(2000).fadeOut("slow");
	/* ---------------------------------------
			STICKY HEADER
	--------------------------------------- */
	if(jQuery('#tg-header').length > 0){
		jQuery(window).on('scroll', function(){
			if(jQuery(this).scrollTop() > 59){
				jQuery('body').addClass('tg-fixedme');
			} else {
				jQuery('body').removeClass('tg-fixedme');
			}
		});
	}
	/* -------------------------------------
			SCROLL NAV
	-------------------------------------- */
	var body = jQuery('body');
	if(body.hasClass('tg-home')){
		body.addClass("home");
		jQuery(window).on('scroll', function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll >= 10) {
				jQuery("#tg-header").addClass("single-page-nav");
			}else {
				jQuery("#tg-header").removeClass("single-page-nav");
			}
		});
	}
	// var _tg_navigation = jQuery('.tg-navigation');
	// _tg_navigation.singlePageNav({
	// 	updateHash: false,
	// 	offset: 90,
	// 	filter: ':not(.external)',
	// });
	var _tg_btnscrolltop = jQuery("#tg-btnscrolltop");
	_tg_btnscrolltop.on('click', function(){
		var _scrollUp = jQuery('html, body');
		_scrollUp.animate({ scrollTop: 0 }, 'slow');
	})

	/* -------------------------------------
			NEXT EVENT COUNTER
	-------------------------------------- */
	var _tg_upcomingeventcounter = jQuery('#tg-upcomingeventcounter');
	_tg_upcomingeventcounter.countdown('2024/03/09', function(event) {
		var $this = jQuery(this).html(event.strftime(''
			+ '<div class="tg-eventcounter"><span>%-D</span><span> Days Left</span></div>'
			+ '<div class="tg-eventcounter"><span>%H</span><span>Hours</span></div>'
			+ '<div class="tg-eventcounter"><span>%M</span><span>Minutes</span></div>'
			+ '<div class="tg-eventcounter"><span>%S</span><span>Seconds</span></div>'
		));
	});
	/* -------------------------------------
			NEXT EVENT COUNTER
	-------------------------------------- */
	// var _tg_upcomingeventcountervtwo = jQuery('#tg-upcomingeventcountervtwo');
	// _tg_upcomingeventcountervtwo.countdown('2024/02/07', function(event) {
	// 	var $this = jQuery(this).html(event.strftime(''
	// 		+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span>%-D</span><span> Days</span></div></div>'
	// 		+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span>%H</span><span>Hours</span></div></div>'
	// 		+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span>%M</span><span>Minutes</span></div></div>'
	// 		+ '<div class="tg-eventcounterholder"><div class="tg-eventcounter"><span>%S</span><span>Seconds</span></div></div>'
	// 	));
	// });
	/* -------------------------------------
			STICKY HEADER
	-------------------------------------- */
	jQuery(window).on('scroll', function() {
		var scroll = jQuery(window).scrollTop();
		if (scroll >= 900) {
			jQuery('.tg-header.tg-headervthree').addClass('tg-showheader');
		} else {
			jQuery('.tg-header.tg-headervthree').removeClass('tg-showheader');
		}
	});

	/* -------------------------------------
			THEME ACCORDION
	-------------------------------------- */
	function themeAccordion() {
		jQuery('.tg-panelcontent').hide();
		jQuery('.tg-accordion h4:first').addClass('active').next().slideDown('slow');
		jQuery('.tg-accordion h4').on('click',function() {
			if(jQuery(this).next().is(':hidden')) {
				jQuery('.tg-accordion h4').removeClass('active').next().slideUp('slow');
				jQuery(this).toggleClass('active').next().slideDown('slow');
			}
		});
	}
	themeAccordion();
});