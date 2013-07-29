window.addEvent('domready', function(){
	//MENU EFFECTS AND REMOVALS
	var descriptions = $$('#main-menu ul li ul.sub-menu span.description');
	descriptions.each(function(element){
		element.dispose();
	});
	
	var titles = $$('#main-menu ul li ul.sub-menu span.title');
	titles.each(function(element){
		var parent = element.getParent();
		parent.appendText(element.get('text'));
		element.dispose();
	});	
	//SIDEBAR SUB MENUS
	var sidebar_sub_menus = $$('#sidebar ul.children');
	$each(sidebar_sub_menus, function(sidebar_sub_menu){
		var sidebar_sub_menu_elements = sidebar_sub_menu.getChildren();
		sidebar_sub_menu_elements.getLast().setStyles({'border-bottom':'0px'});
	});
	// FRONTPAGE NO IMAGE AND SUBTITLE FIX
	var h3s = $$('div.front-page-columns-wrapper div.front-page-column h3');
	$each(h3s, function(h3){
		var checker = h3.getElement('img');
		if ( checker == null )
		{
			h3.toggleClass('no-img');
		}
	});
	// FOOTER MENU
	var footer_menu_items = $$('#footer-menu ul li');
	if ( footer_menu_items[0] != null )
	{
		footer_menu_items[0].toggleClass('first');	
		footer_menu_items.getLast().toggleClass('last');
	}
	
	//PORTFOLIO ICON
	
	var portfolio_thumbnails = $$('.thumbnail-portfolio a');
	$each(portfolio_thumbnails, function(el){
		var icon = new Element('span', {'class': 'icon'});
		icon.injectInside(el);
		var children = el.getChildren();
		var icon_child = children[1];		
		var icon_top = parseInt(el.getStyle('height')) / 2;
		icon_child.setStyles({'top':300});
		icon_child.setStyles({'opacity':0});		
			el.addEvent('mouseover', function(){
				icon_child.morph({'top':icon_top, 'opacity':1});	
			
			});
			el.addEvent('mouseout', function(){
				icon_child.morph({'top':300, 'opacity':0});	
			});		
		
	});
	
	//GALLERY ICON
	var gallery_thumbnails = $$('.thumbnail-gallery a');
	$each(gallery_thumbnails, function(el){
		var icon = new Element('span', {'class': 'icon'});
		icon.injectInside(el);
		var children = el.getChildren();
		var icon_child = children[1];		
		var icon_top = parseInt(el.getStyle('height')) / 2;
		icon_child.setStyles({'top':500});
		icon_child.setStyles({'opacity':0});		
			el.addEvent('mouseover', function(){
				icon_child.morph({'top':icon_top, 'opacity':1});	
			
			});
			el.addEvent('mouseout', function(){
				icon_child.morph({'top':500, 'opacity':0});	
			});		
		
	});	
	//BLOG ICON
	var thumbnails = $$('.thumbnail-front-page a');
	$each(thumbnails, function(el){
		var icon = new Element('span', {'class': 'icon'});
		icon.injectInside(el);
		var children = el.getChildren();
		var icon_child = children[1];		
		var icon_top = parseInt(el.getStyle('height')) / 2;
		icon_child.setStyles({'top':500});
		icon_child.setStyles({'opacity':0});		
			el.addEvent('mouseover', function(){
				icon_child.morph({'top':icon_top, 'opacity':1});	
			
			});
			el.addEvent('mouseout', function(){
				icon_child.morph({'top':500, 'opacity':0});	
			});		
		
	});	
	//BREADCRUMBS REMOVE TITLES
	var breadcrumbs = $('breadcrumbs');
	if ( breadcrumbs != null )
	{
		var headings = $$('h1.entry-title');
		if ( headings != null )
		{
			$each(headings,function(heading){
				heading.setStyles({'display':'none'});
			});
		}
		
		var headings = $$('h1.page-title');
		if ( headings != null )
		{
			$each(headings,function(heading){
				heading.setStyles({'display':'none'});
			});		
		}
	}
	//CONTENT SLIDER CALL
	
	function dt_contentSlider(){
		var wrapper = $('content-slider');
		var mask = $$('#content-slider .mask'); mask = mask[0];
		var slides = $$('#content-slider .mask div.content');
		var slideWidth = parseInt(slides[0].getStyle('width'));
		var slideMargin = parseInt(slides[0].getStyle('margin-right'));
		var controls = $$('#content-slider-controls span');
		var maskWidth = slides.length * (slideWidth + slideMargin);
		mask.setStyle('width', maskWidth);
		// animation settings
		var slideFx = new Fx.Morph(mask, {duration: 450, transition: Fx.Transitions.Sine.easeInOut});
		function animate(a){
			slideFx.cancel();
			slideFx.start({
				'left': parseInt(-(a))
			})		
		}			
		var counter = 0;
		var position = 0;
		var play;
		// autoplay function
		function periodical(){
			play = (function(){
				position = parseInt(counter * (slideWidth + slideMargin));
				if (counter < slides.length - 1) {
					animate(position);	
					counter++;
				} else {
					counter = 0;
					animate(position);
				}
			}).periodical(3000);
		}
		periodical();
		// halts on hover / autoplay on mouseleave
		wrapper.addEvents({
			'mouseenter': function(){
				$clear(play);
			},
			'mouseleave': periodical
		});
		// controls events
		controls.each(function(item, index){
			var position = parseInt(index * (slideWidth + slideMargin));
			item.addEvents({
				'mouseover':function(){
					counter = index;
					animate(position);
				}
			});
		});
	}
	if ( $('content-slider') != null ) {
		dt_contentSlider();
	}
	
	//SCROLLABLE CONTENT
	(function init_scroll()
	{
		var scrollable_content = $('scroll-content-mask');
		if ( scrollable_content )
		{
			var children = scrollable_content.getChildren();
			var children_count = children.length;
			var child_width = parseInt(children[0].getStyle('width'));
			var child_margin = parseInt(children[0].getStyle('margin-right'));
			var scrollable_content_width = child_width * children_count + child_margin * children_count;
			scrollable_content.setStyles({'width':scrollable_content_width});
			var scrollable_controls_left = $$('#scrollable-controls span.left');
			var scrollable_controls_right = $$('#scrollable-controls span.right');	
			var motions = false;
			
			scrollable_content.set('tween', {duration: 500, transition: Fx.Transitions.Back.easeOut});
			
			function scroll_left()
			{
				motions = true;
				var scrollable_content_current_left = parseInt(scrollable_content.getStyle('left'));
				if ( scrollable_content_current_left < 0 )	scrollable_content.tween('left', scrollable_content_current_left + child_width + child_margin);
			}
			
			function scroll_right()
			{
				motions = true;
				var scrollable_content_current_left = parseInt(scrollable_content.getStyle('left'));
				var comparer = -scrollable_content_width + 5 * child_width + 3 * child_margin;
				if ( scrollable_content_current_left > comparer )
				scrollable_content.tween('left', scrollable_content_current_left - child_width - child_margin);					
			}
			
			function reset_motion()
			{
				motions = false;
			}
				
			scrollable_controls_left.addEvent('click', function(event){
				if ( motions == false )
				{
					scroll_left();
					var motion = reset_motion.delay(600);
				}
			});
		
			scrollable_controls_right.addEvent('click', function(event){
				if ( motions == false )
				{
					scroll_right();
					var motion = reset_motion.delay(600);			
				}
			});
			
			// ADDING FRAME TO IMAGES
			
			var anchors = $$('#scrollable-content a');
			anchors.each(function(item){
				var img_frame = new Element('span',{'class':'img_frame'});
				img_frame.injectInside(item);
			});
		}
	})();
	
	//FOOTER TABS SEPARATOR RESIZE
	var footer_tabs = $$('#footer div.tab');
	if ( footer_tabs[0] != null )
	{
		var footer_tabs_height = 0;
		$each(footer_tabs, function(footer_tab){
			var current_element_height = parseInt(footer_tab.getStyle('height'));
			if ( current_element_height > footer_tabs_height ) footer_tabs_height = current_element_height;
		});
		footer_tabs.setStyles({'height':footer_tabs_height});
	}
});

window.addEvent('load', function(){							 										 
	//SLIDESHOW DIV HIDE
	var slideshow = $('slideshow-wrapper');
	if ( slideshow != null )
	{
		var slideshow_children = slideshow.getChildren();
		slideshow_children.setStyles({'display':'block'});
	}
	//MAIN MENU DISPLAY
	var main_menu = $('main-menu');
	main_menu.setStyles({'overflow':'visible'});
});

