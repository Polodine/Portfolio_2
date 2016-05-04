'use strict'
$(function(){

	$('#list-sale > a.hidden-list-group-item').hide();
	$('#list-sale > a').click(function(e){
		if ($(this).hasClass('main-item') == false)
			return false;
		var k = 0;
		var a = $(this);
		while (true){
			k++;
			if (k == 100) return;
			a = a.next();
			if (a.data('item') != $(this).data('item')){
				$(this).find('span.glyphicon').toggleClass('glyphicon-menu-right').toggleClass('glyphicon-menu-down');
				return false;
				}
			a.toggle();
		}
	})

	$('#carousel').on('slide.bs.carousel' , function(e){
		var a = e.relatedTarget;
		var queueOfAnimates = false;
		$('#carousel-footer .active').addClass('pseudo-active');
		if ($('#carousel-footer .active') == a) return;
		var numberOfRelatedTarget = number(a) + 1;
		$('#carousel-footer .pseudo-active').removeClass('active');
		$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').css('position', 'relative');
		$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').addClass('active');
		$('#carousel-footer .pseudo-active').css('width', $('#carousel-footer .pseudo-active').width());
		$('#carousel-footer .pseudo-active').height() > $('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').height() ? 
		// $('#carousel-footer').css('height', $('#carousel-footer').outerHeight()) :
		document.getElementById('carousel-footer').style.height = document.querySelector('#carousel-footer').offsetHeight :
		// $('#carousel-footer').css('height', $('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').height() + 51 + 'px');
		document.getElementById('carousel-footer').style.height = document.querySelector('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').offsetHeight;
		// alert($('#carousel-footer').css('height'));
		if (e.direction == "left"){
			$('#carousel-footer .pseudo-active').css('position', 'absolute');
			$('#carousel-footer .pseudo-active').css('top', '10px');
			$('#carousel-footer .pseudo-active').animate({left: -$(window).width()}, 600, function(){
				queueOfAnimates = true;
			});
			$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').css('right', -$(window).width());
			$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').animate({right: '0px'}, 600);
		}
		else {
			$('#carousel-footer .pseudo-active').css('position', 'absolute');
			$('#carousel-footer .pseudo-active').animate({right: -$(window).width()}, 600, function(){
				queueOfAnimates = true;
			});
			$('#carousel-footer .pseudo-active').css('top', '10px');
			$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').css('position', 'relative');
			$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').css('left', -$(window).width());
			$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').addClass('active');
			$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').animate({left: '0px'}, 600);
		}
		setTimeout(function(){
			var timer = setInterval(function(){
				if (queueOfAnimates){
					$('#carousel-footer .pseudo-active').css('right', 'auto');
					$('#carousel-footer .pseudo-active').css('left', 'auto');
					$('#carousel-footer .pseudo-active').css('position', 'static');
					$('#carousel-footer .pseudo-active').css('width', 'auto');
					$('#carousel-footer .pseudo-active').css('top', 'auto');
					$('#carousel-footer').css('height', 'auto');
					$('#carousel-footer .pseudo-active').removeClass('pseudo-active');
					$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').css('left', 'auto');
					$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').css('right', 'auto');
					$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').css('position', 'static');
					$('#carousel-footer p:nth-child(' + numberOfRelatedTarget + ')').addClass('active');
					queueOfAnimates = false;
					clearTimeout(timer);				
				}
			}, 10)
		}, 660);
	});
	
	$('.all-checked').click(function(e){
		var detectedTrue = true;
		var checkboxes = this.parentNode.nextElementSibling.getElementsByTagName('input');
		for (var i in checkboxes) if (checkboxes.hasOwnProperty(i)){
			if (!checkboxes[i].checked){
				detectedTrue = false;
				break;
			}
		}
		if (!detectedTrue){
			$(this).parent().next().find('input[type="checkbox"]').prop('checked', true);
			detectedTrue = true;
		}
		else 
			$(this).parent().next().find('input[type="checkbox"]').prop('checked', false);

	});

	$('.all-checked').mousedown(function(e){
		e.preventDefault();
	});
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