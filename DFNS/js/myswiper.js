$( function () {
	var upsSwiper = new Swiper('.swiper-container-1', {
		speed: 1000,
		longSwipes: false,
		loop: true,
		autoplay: {
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-container-1 .swiper-button-next',
			prevEl: '.swiper-container-1 .swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});




	var upsSwiper = new Swiper('.swiper-container-example', {
		speed: 1000,
		longSwipes: false,
		loop: true,
		autoplay: {
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-container-example .swiper-button-next',
			prevEl: '.swiper-container-example .swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});
	var upsSwiper = new Swiper('.swiper-container-travel', {
		speed: 1000,
		longSwipes: false,
		loop: true,
		autoplay: {
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-container-travel .swiper-button-next',
			prevEl: '.swiper-container-travel .swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});















	var upsSwiper = new Swiper('.swiper-container-2', {
		speed: 1000,
		longSwipes: false,
		loop: true,
		autoplay: false,
		slidesPerView: 4,
		navigation: {
			nextEl: '.contact .swiper-button-next',
			prevEl: '.contact .swiper-button-prev',
		}
	});
	
	var swiper = new Swiper('.swiper-container-3', {
	    direction: 'vertical',
	    slidesPerView: 'auto',
	    spaceBetween: 30,
	    autoplay: {
			disableOnInteraction: false,
		},
		autoplay: false,
	    mousewheel: true,
	    pagination: {
	      el: '.swiper-pagination',
	      clickable: true,
	    },
	});
	
	var swiper = new Swiper('.swiper-container-4', {
	  	slidesPerView:4,
	  	freeMode: true,
	  	scrollbar: {
	    	el: '.swiper-scrollbar',
	  	},
	  	mousewheel: true,
	});
	
	var swiper = new Swiper('.swiper-container-5', {
	  	slidesPerView:4,
	  	freeMode: true,
	  	scrollbar: {
	    	el: '.swiper-scrollbar',
	  	},
	  	mousewheel: true,
	});
	
	/*var upsSwiper = new Swiper('.swiper-container-6', {
		speed: 1000,
		longSwipes: false,
		loop: true,
		autoplay: true,
		slidesPerView: 4
	});*/
	
	/*var swiper = new Swiper('.swiper-container-7',{
		pagination: {
		    el: '.block-buster .swiper-pagination',
	    	clickable: true,
		    renderBullet: function (index, className) { 
		        return '<li class="' + className + '"><image src="images/block-buster-' + ( index  + 3 ) + '.jpg"><div class="detail"><div class="icon"></div><p><img src="images/block-buster-12.png" width="222" height="33"/></p></div></li>';
		    }
	      }
	});*/
	
	/*var swiper = new Swiper('.swiper-container-8',{
		pagination: {
		    el: '.info .swiper-pagination',
	    	clickable: true,
		    renderBullet: function (index, className) { 
		    	switch(index){
		            case 0:text='新娘课堂';break;
		            case 1:text='新闻公告';break;
		            case 2:text='旅游攻略';break;
		        }
		        return '<li class="' + className + '">' + text + '</li>';
		    }
	      }
	});*/
	
	$(window).scroll(function(){
		if($(window).scrollTop()>1000){
			$(".go-to-top").slideDown(500);
		} else {
			$(".go-to-top").slideUp(500);
		}
	});
			
	$(".go-to-top").click(function(){
		$("body,html").animate({scrollTop:0},500);
	});
	
	$(".block-buster").slide({
		mainCell:".bd ul",
		effect:"left",
		autoPlay:true
	});
	
	$(".info .tabs").slide({
		mainCell:".bd ul",
		effect:"leftLoop",
		scroll : 4,
		vis : 4,
		autoPlay:true
	});

});