	window.addEvent('domready',function(){
		var checker = $('box');
		if( checker != null )
		{
			var slider = new noobSlide({
				box: $('box'),
				items: $$('#box div'),
				size: 960,
				fxOptions: {
					duration: 1000,
					transition: Fx.Transitions.Sine.easeOut,
					wait: false
				},
				autoPlay: true,
				handles: $$('#handles span'),
				onWalk: function(currentItem,currentHandle){
					this.handles.removeClass('active');
					currentHandle.addClass('active');
				}
			});
		}
	});
