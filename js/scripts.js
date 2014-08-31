$( document ).ready(function() {

	console.log('scripts.js is being executed.');

	$('.nav-icon').bind('click', function(){
		showResponsiveNav();
	});

	$('.header-topic-training .header-topics-details').hide();
	$('.header-topic-cooking .header-topics-details').hide();
	$('.header-topic-coaching .header-topics-details').hide();
	
	/*$('.ha-training').css('opacity', 0.6);
	$('.ha-cooking').css('opacity', 0.6);
	$('.ha-coaching').css('opacity', 0.6);*/

	
	bindEvents();
	
});

function bindEvents(){
	$('.header-topic-training h3').bind('click', function(){ showDetail('training'); });	
	$('.header-topic-cooking h3').bind('click', function(){ showDetail('cooking'); });
	$('.header-topic-coaching h3').bind('click', function(){ showDetail('coaching'); });
};

function showDetail(myDetail){
	$('.header-topic-training .header-topics-details').slideUp();
	$('.header-topic-cooking .header-topics-details').slideUp();
	$('.header-topic-coaching .header-topics-details').slideUp();
	
	$('.header-topic-training h3').animate({opacity: 0.8}, {queue: false, duration: 500});
	$('.header-topic-cooking h3').animate({opacity: 0.8}, {queue: false, duration: 500});
	$('.header-topic-coaching h3').animate({opacity: 0.8}, {queue: false, duration: 500});
	

	if($('.ha-training').hasClass('ha-training-2')){
		$('.ha-training').removeClass('ha-training-2');
		$('.ha-training').addClass('ha-training-1');
	}
	if($('.ha-cooking').hasClass('ha-cooking-2')){
		$('.ha-cooking').removeClass('ha-cooking-2');
		$('.ha-cooking').addClass('ha-cooking-1');
	}
	if($('.ha-coaching').hasClass('ha-coaching-2')){
		$('.ha-coaching').removeClass('ha-coaching-2');
		$('.ha-coaching').addClass('ha-coaching-1');
	}
	
	$('.ha-' + myDetail).removeClass('ha-' + myDetail + '-1');
	$('.ha-' + myDetail).addClass('ha-' + myDetail + '-2');
	
	
	$('.header-topic-' + myDetail + ' h3').animate({opacity: 1.0},{queue: false, duration: 500});

	$('.header-topic-' + myDetail + ' .header-topics-details').slideDown('');
};

function showResponsiveNav(){
	$('.nav-icon').off('click');
	$('.nav-container-phone').slideDown();
	$('.nav-icon').bind('click', function(){
		hideResponsiveNav();
	});
};

function hideResponsiveNav(){
	$('.nav-icon').off('click');
	$('.nav-container-phone').slideUp();
	$('.nav-icon').bind('click', function(){
		showResponsiveNav();
	});	
};