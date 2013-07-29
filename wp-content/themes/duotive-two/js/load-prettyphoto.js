	jQuery(document).ready(function($) {
			var gallery_wrapper = jQuery("dt.gallery-icon");									
			gallery_wrapper.toggleClass('thumbnail-gallery');
			var gallery = jQuery("dt.gallery-icon a");
			gallery.attr('rel','gallery[photo]');											
			jQuery("dt.gallery-icon a[rel='gallery[photo]']").prettyPhoto({theme:'duotive-prettyphoto', opacity:0.4, show_title: false});
			jQuery("a[rel='gotomodal[gallery]']").prettyPhoto({theme:'duotive-prettyphoto', opacity:0.4, show_title: false});
});
