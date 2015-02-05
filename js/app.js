$(document).ready(function(){

//underscoring navigation bar selection in wide view
	if($(window).width() > 768) {
		$(".nav-bar a").click(function(event){
			event.preventDefault();
			$(this).closest(".nav-bar").find("li").removeClass("underlined");
			$(this).closest("li").addClass("underlined");
		});
	};

	if($(window).width() < 768) {
			$(".about-me").removeClass("underlined");
		};

//showing top button on scroll down
	$(window).scroll(function(event){
	event.preventDefault();
	if($(window).width() > 768) {
		$(".top-link").addClass("hidden");	
	};
	if($(window).scrollTop() < 500) {
	$(".top-link").addClass("hidden");
	};
	if($(window).scrollTop() > 500 && ($(window).width() < 768)) {
	$(".top-link").removeClass("hidden");
	};

	});

//scroll to top on top button click
	$(".top-link").click(function(event){
		event.preventDefault();
		$('html, body').animate({
	    		scrollTop: $("body").offset().top
				}, 1000);
	});

//showing about me content on navigation click
	$(".about-me-link").click(function(event){
		event.preventDefault();
		if($(".about-contact-container").hasClass("hidden")) {
			$(".portfolio-container").fadeOut(0, function(){
				$(this).addClass("hidden");});
			$(".about-contact-container").fadeIn(function(){
				$(this).removeClass("hidden");});
			$('html, body').animate({
			    	scrollTop: $(".second-column").offset().top
					}, 0);
		} else {
			$('html, body').animate({
			    	scrollTop: $(".second-column").offset().top
					}, 500);
			};	
	});

//showing portfolio content on navigation click
	$(".portfolio-link").click(function(event){
		event.preventDefault();
		$(".portfolio-container").fadeIn(function(){
			$(this).removeClass("hidden");});
		$(".about-contact-container").fadeOut(0, function(){
			$(this).addClass("hidden");});
		$('html, body').animate({
			    	scrollTop: $(".second-column").offset().top
					}, 0);
	});

//showing contact content on navigation click
	$(".contact-link").click(function(event){
		event.preventDefault();
		if($(".about-contact-container").hasClass("hidden")) {
			$(".portfolio-container").fadeOut(0, function(){
				$(this).addClass("hidden");});
			$(".about-contact-container").fadeIn(function(){
				$(this).removeClass("hidden");});
			$('html, body').animate({
			    	scrollTop: $(".contact-container").offset().top
					}, 0);
		} else {
			$('html, body').animate({
			    	scrollTop: $(".contact-container").offset().top
					}, 500);};
	});


});