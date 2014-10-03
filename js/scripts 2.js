var currentHeaderDetail = "blank";

function bindEvents(){

	// the following are mouse events required for the header interaction on home.
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

	if(myDetail == 'training'){  // If the user clicked the "Training" button...
		
		if(myDetail == currentHeaderDetail){ // ...and the currently active button is the same as the one that just got clicked.
			$('.header-topic-' + myDetail + ' .header-topics-details').slideUp();
			currentHeaderDetail = "blank";
		}
			else{ // ...or the currently active button is not the same as the one that just got clicked.
				if($('.header-topic-cooking h3').css("opacity") == 1){
					$('.header-topic-cooking h3').animate({opacity: 0.8}, {queue: false, duration: 500});
				}
				if($('.header-topic-coaching h3').css("opacity") == 1){
					$('.header-topic-coaching h3').animate({opacity: 0.8}, {queue: false, duration: 500});
				}
			
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
					if($('.header-topic-training h3').css("opacity") == 1){
						$('.header-topic-training h3').animate({opacity: 0.8}, {queue: false, duration: 500});
					}
					if($('.header-topic-coaching h3').css("opacity") == 1){
						$('.header-topic-coaching h3').animate({opacity: 0.8}, {queue: false, duration: 500});
					}
	
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
						if($('.header-topic-training h3').css("opacity") == 1){
							$('.header-topic-training h3').animate({opacity: 0.8}, {queue: false, duration: 500});
						}
						if($('.header-topic-cooking h3').css("opacity") == 1){
							$('.header-topic-cooking h3').animate({opacity: 0.8}, {queue: false, duration: 500});
						}
						
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