'use strict'

$('#carousel').on('slide.bs.carousel' , function(e){
	var a = e.relatedTarget;
	$('#carousel-footer .active').addClass('pseudo-active');
	if ($('#carousel-footer .active') == a) return;
	
	var k = number(a) + 1;
	$('#carousel-footer .pseudo-active').removeClass('active');
	$('#carousel-footer p:nth-child(' + k + ')').css('position', 'relative');
	$('#carousel-footer p:nth-child(' + k + ')').addClass('active');
	$('#carousel-footer .pseudo-active').css('width', $('#carousel-footer .pseudo-active').width());
	$('#carousel-footer .pseudo-active').height() > $('#carousel-footer p:nth-child(' + k + ')').height() ? 
	// $('#carousel-footer').css('height', $('#carousel-footer').outerHeight()) :
	document.getElementById('carousel-footer').style.height = document.querySelector('#carousel-footer').offsetHeight :
	// $('#carousel-footer').css('height', $('#carousel-footer p:nth-child(' + k + ')').height() + 51 + 'px');
	document.getElementById('carousel-footer').style.height = document.querySelector('#carousel-footer p:nth-child(' + k + ')').offsetHeight;
	// alert($('#carousel-footer').css('height'));
	if (e.direction == "left"){


		$('#carousel-footer .pseudo-active').css('position', 'absolute');
		$('#carousel-footer .pseudo-active').css('top', '10px');
		$('#carousel-footer .pseudo-active').animate({left: -$(window).width()}, 600);

		$('#carousel-footer p:nth-child(' + k + ')').css('right', -$(window).width());

		$('#carousel-footer p:nth-child(' + k + ')').animate({right: '0px'}, 600);
	}
	else {
		$('#carousel-footer .pseudo-active').css('position', 'absolute');
		$('#carousel-footer .pseudo-active').animate({right: -$(window).width()}, 600);
		$('#carousel-footer .pseudo-active').css('top', '10px');
		$('#carousel-footer p:nth-child(' + k + ')').css('position', 'relative');
		$('#carousel-footer p:nth-child(' + k + ')').css('left', -$(window).width());
		$('#carousel-footer p:nth-child(' + k + ')').addClass('active');
		$('#carousel-footer p:nth-child(' + k + ')').animate({left: '0px'}, 600);
	}
	setTimeout(function(){
		$('#carousel-footer .pseudo-active').css('right', 'auto');
		$('#carousel-footer .pseudo-active').css('left', 'auto');
		$('#carousel-footer .pseudo-active').css('position', 'static');
		$('#carousel-footer .pseudo-active').css('width', 'auto');
		$('#carousel-footer .pseudo-active').css('top', 'auto');
		$('#carousel-footer').css('height', 'auto');
		$('#carousel-footer .pseudo-active').removeClass('pseudo-active');
		$('#carousel-footer p:nth-child(' + k + ')').css('left', 'auto');
		$('#carousel-footer p:nth-child(' + k + ')').css('right', 'auto');
		$('#carousel-footer p:nth-child(' + k + ')').css('position', 'static');
		$('#carousel-footer p:nth-child(' + k + ')').addClass('active');
	}, 612);
})

function number(element){
	var a = element.parentNode.childNodes;
	var k = 0;
	for (var i in a) if (a.hasOwnProperty(i)){
		if (a[i].nodeType != Node.ELEMENT_NODE) continue;
		if (element == a[i]) return k;
		k++;
	}
}