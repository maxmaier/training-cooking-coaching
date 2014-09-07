var currentHeaderDetail = "blank";

function bindEvents(){
	$('.header-topic-training h3').on('click', function(){ showDetail('training'); });	
	$('.header-topic-cooking h3').on('click', function(){ showDetail('cooking'); });
	$('.header-topic-coaching h3').on('click', function(){ showDetail('coaching'); });
	$('.header-topic-training h3').mouseover('click', function(){ mouseInDetail('training'); });	
	$('.header-topic-cooking h3').mouseover('click', function(){ mouseInDetail('cooking'); });
	$('.header-topic-coaching h3').mouseover('click', function(){ mouseInDetail('coaching'); });
	$('.header-topic-training h3').mouseout('click', function(){ mouseOutDetail('training'); });	
	$('.header-topic-cooking h3').mouseout('click', function(){ mouseOutDetail('cooking'); });
	$('.header-topic-coaching h3').mouseout('click', function(){ mouseOutDetail('coaching'); });
};
/*
function showDetail(myDetail){

	if($('.header-topic-training .header-topics-details').is(':animated') != true){
		
		if($('.header-topic-training .header-topics-details').css('display') != 'none'){
			$('.header-topic-training .header-topics-details').slideUp();
		}
		if($('.header-topic-cooking .header-topics-details').css('display') != 'none'){
			$('.header-topic-cooking .header-topics-details').slideUp();
		}
		if($('.header-topic-coaching .header-topics-details').css('display') != 'none'){
			$('.header-topic-coaching .header-topics-details').slideUp();
		}
		
		if(currentHeaderDetail != myDetail){
			$('.header-topic-' + myDetail + ' .header-topics-details').slideDown('');
		}

		

		$('.header-topic').each(function(i, obj) {
			if($(this + ' .header-topics-details').css('display') != 'none'){		
				$(this + ' .header-topics-details').slideUp();	
			}
		});

		$('.header-topic').each(function(i, obj) {
			if(jQuery(this).find(".header-topics-details").css('display') != 'none'){		
				jQuery(this).find(".header-topics-details").slideUp();	
			}
		});
	}

	
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

	if(currentHeaderDetail != myDetail){
		$('.header-topic-' + myDetail + ' .header-topics-details').slideDown('');
	}
	
	currentHeaderDetail = myDetail;

};

*/

function showDetail(myDetail){

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

	if(myDetail == 'training'){
		if(myDetail == currentHeaderDetail){
			$('.header-topic-' + myDetail + ' .header-topics-details').slideUp();
			currentHeaderDetail = "blank";
		}
			else{
				$('.header-topic-' + myDetail + ' .header-topics-details').slideDown();
				$('.header-topic-cooking .header-topics-details').slideUp();
				$('.header-topic-coaching .header-topics-details').slideUp();
				currentHeaderDetail = myDetail;					
			}
	} 
		else if(myDetail == 'cooking'){
			if(myDetail == currentHeaderDetail){
				$('.header-topic-' + myDetail + ' .header-topics-details').slideUp();
				currentHeaderDetail = "blank";
			}
				else{
					$('.header-topic-' + myDetail + ' .header-topics-details').slideDown();			
					$('.header-topic-training .header-topics-details').slideUp();
					$('.header-topic-coaching .header-topics-details').slideUp();
					currentHeaderDetail = myDetail;				
				}

		}
			else if(myDetail == 'coaching'){
				if(myDetail == currentHeaderDetail){
					$('.header-topic-' + myDetail + ' .header-topics-details').slideUp();
					currentHeaderDetail = "blank";
				}
					else{
						$('.header-topic-' + myDetail + ' .header-topics-details').slideDown();			
						$('.header-topic-training .header-topics-details').slideUp();
						$('.header-topic-cooking .header-topics-details').slideUp();	
						currentHeaderDetail = myDetail;	
					}

			}
			else{
				console.log('There is something wrong with the if conditions in the header.');				
			}
	
	
}


function mouseInDetail(myDetail){
	//alert("test");
	if($('.header-topic-' + myDetail + ' h3').css("opacity") != 1){
		$('.header-topic-' + myDetail + ' h3').animate({opacity: 1.0}, {queue: false, duration: 500});
	}
};

function mouseOutDetail(myDetail){
	//alert("test");
	if(currentHeaderDetail != myDetail){
	$('.header-topic-' + myDetail + ' h3').animate({opacity: 0.8}, {queue: false, duration: 500});
	}
};

function showResponsiveNav(){
	$('.nav-icon').off('click');
	$('.nav-container-phone').slideDown();
	$('.nav-icon').on('click', function(){
		hideResponsiveNav();
	});
};

function hideResponsiveNav(){
	$('.nav-icon').off('click');
	$('.nav-container-phone').slideUp();
	$('.nav-icon').on('click', function(){
		showResponsiveNav();
	});	
};



$( document ).ready(function() {

	$('.nav-icon').on('click', function(){
		showResponsiveNav();
	});

	$('.header-topic-training .header-topics-details, .header-topic-cooking .header-topics-details, .header-topic-coaching .header-topics-details').hide();
	
	bindEvents();

});