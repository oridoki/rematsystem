window.addEvent('domready', function(){
	var images = $$('#content img');
	var icons = $$('div.heading-with-icon img');
	$each(icons, function(icon){
		images.erase(icon);						  
	});
	var sharing_icons = $$('#sharing img');
	$each(sharing_icons, function(sharing_icon){
		images.erase(sharing_icon);						  
	});
	var content_slideshow_imgs = $$('div.content-slideshow img');
	$each(content_slideshow_imgs, function(content_slideshow_img){
		images.erase(content_slideshow_img);						  
	});	
	
	var i = 0;
	images.each(function(element){
		element.setStyle('opacity', '0');
		element.setStyle('visibility', 'hidden');
		var temp_img_wrapper = new Element('span', {'class' : 'imagepreloader'});
		
		var element_height = 0;
		var element_width = 0;
		var element_float = 'none';
		
		var element_height = parseInt(element.getStyle('height'));
		var element_width = parseInt(element.getStyle('width'));
		var element_float = element.getStyle('float');
	
		temp_img_wrapper.setStyle('display','inline-block');
		temp_img_wrapper.setStyle('width',element_width);
		temp_img_wrapper.setStyle('height',element_height);
		temp_img_wrapper.setStyle('float',element_float);

		temp_img_wrapper.inject(element, 'before');	
		element.inject(temp_img_wrapper, 'inside');
	});
});
window.addEvent('load', function(){
	var images = $$('#content img');
	var icons = $$('div.heading-with-icon img');
	$each(icons, function(icon){
		images.erase(icon);						  
	});
	var sharing_icons = $$('#sharing img');
	$each(sharing_icons, function(sharing_icon){
		images.erase(sharing_icon);						  
	});	
	var content_slideshow_imgs = $$('div.content-slideshow img');
	$each(content_slideshow_imgs, function(content_slideshow_img){
		images.erase(content_slideshow_img);						  
	});	
	
	var i = 0;
	images.each(function(element){
		function delay_img() { 
			element.fade('in'); 
			var element_parent = element.getParent();			
			}
		delay_img.delay(i*50);
		i++;
	});
	images.each(function(element){
		function wait () {						 
			var element_parent = element.getParent();						
			element.inject(element_parent, 'before');
			element_parent.setStyle('display','none');
			element_parent.dispose();			
		}
		wait.delay(i*50 + 50);
	});
});