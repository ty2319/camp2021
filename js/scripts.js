$(function() {
	Page.init();
	
	$('table').each(function(){
		var numTh = $('thead th' , this).length;
		var isEven = true;
		$('tbody tr' , this).each(function() {
			var elm = $(this);
			
			if (numTh == elm.children().length || elm.children().length == 1) {
			  isEven = !isEven;
			} else {
				elm.css('border-top' , '1px dotted #999');
			}
			$(this).addClass(isEven ? 'blue' : 'white');
		});
	});
	
	$('.scroller').each(function(index, element) {
		var box = $(element);
		box.css({'background' : 'url(img/common/back' + (index+1) + '.jpg) center top no-repeat fixed' , 'background-size' : '100% auto'});
		
		box.mousewheel(function(eo, delta, deltaX, deltaY) {
			var h = $(".jspDrag").position().top;
		
			if (h > 100) {
				$('#gotop').stop().animate({'bottom': 60}, 200).show();
				
				$('#menu-toc a').click(function() {
					$('#gotop').stop().animate({bottom : -60} , 200).hide();
				});
				
				$('.bb-custom-wrapper').mouseup(function() {
					$('#gotop').stop().animate({bottom : -60} , 200).hide();
				});
			} else {
				$('#gotop').stop().animate({'bottom': -60}, 200).hide();
			}
			
		});
	
		$('#gotop').click(function(){
			$(".jspPane,.jspDrag").stop().animate({'top' : 0}, 500, "swing");
			$('#gotop').stop().animate({'bottom': '-60'}, 200).hide();
		});
	});
		
	$("a[rel^=game]").fancybox({
		'padding'		: 0,
		'margin'		: 20,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic',
		'titlePosition'	: 'over',
		'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
});
	
$(window).on('load resize' , function() {
	$('#item1 .scroller').css({'min-height' : $('h2').outerHeight() , 'background-size' : 'cover' , 'height' : $(window).height()});
	
	$('header').css({'padding-top' : $(window).width()*0.22 , 'padding-bottom' :  $(window).width()*0.05});
	
	if ($(window).width() < 700) {
		$('figure img').attr('src' , 'img/common/09_2.jpg');
		$('.gallery li , .gallery dd , .gallery a').height(($(window).width()* 0.07 / 4);
	} else {
		$('figure img').attr('src' , 'img/common/09.jpg');	
		$('.gallery li , .gallery dd , .gallery a').height(($(window).width()* 0.07 / 8);	
	}
});
// JavaScript Document