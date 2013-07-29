$.noConflict();
jQuery(document).ready(function($) {
	$('#main-menu ul.menu').superfish({animation: {opacity:'show',height:'show'},delay:350}); 
	$("div.tabs").tabs({ fx: { opacity: 'toggle', height: 'toggle',  duration: 'slow' }});
	$("div.tour").tabs({ fx: [{opacity:'toggle', duration:'fast'},{opacity:'toggle', duration:'slow'}] });
	$("div.accordion").accordion();
	$("ul.tabs").tabs("div.panes>div"); 
	$('.ppy').popeye({'direction':'right', 'opacity':'1'});		
	//PORTFOLIO SPECIAL
	var special_portfolio_elements = $('#portfolio-special-elements');
	if ( special_portfolio_elements ) 
	{
		var size = 0;
		var children = special_portfolio_elements.children();
		$.each(children, function(child){size = size + 277;});
		special_portfolio_elements.css('width',size);
	
	}
	//FORM VALIDATION
	var name = $('#commentform p.comment-form-author input');
	var email = $('#commentform p.comment-form-email input');
	var comment = $('#commentform p.comment-form-comment textarea');			
	if ( name != '' ) name.addClass('required');
	if ( comment != '' ) comment.addClass('required');			
	if ( email != '' ) email.addClass('required email');			
	$("#commentform").validate();
	$("#contactform").validate();
	$('#contactform').ajaxForm(function() { alert("Your message has been sent!"); $('#contactform').clearForm();}); 			
	
	
	$('.hr').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	}); 
	$('.content-slideshow-random').nivoSlider({effect:'random',slices:6,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:false,keyboardNav:false,pauseOnHover:true,manualAdvance:false, customChange: function(){}});
	$('.content-slideshow-fade').nivoSlider({effect:'fade',slices:6,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:false,keyboardNav:false,pauseOnHover:true,manualAdvance:false, customChange: function(){}});			
	$('.content-slideshow-fold').nivoSlider({effect:'fold',slices:6,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:false,keyboardNav:false,pauseOnHover:true,manualAdvance:false, customChange: function(){}});						
	$('.content-slideshow-sliceup').nivoSlider({effect:'sliceUp',slices:6,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:false,keyboardNav:false,pauseOnHover:true,manualAdvance:false, customChange: function(){}});									
	$('.content-slideshow-slicedown').nivoSlider({effect:'sliceDown',slices:6,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:false,keyboardNav:false,pauseOnHover:true,manualAdvance:false, customChange: function(){}});												
	$('.content-slideshow-sliceupdown').nivoSlider({effect:'sliceUpDown',slices:6,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:false,keyboardNav:false,pauseOnHover:true,manualAdvance:false, customChange: function(){}});															
});