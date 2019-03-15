$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical', // 垂直切换选项
		mousewheel: true,
		keyboard : true,
	})
	var index = new Swiper ('.banner', {
		// 如果需要分页器
		pagination: {
		  el: '.swiper-pagination',
		},
		
		// 如果需要前进后退按钮
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	})
	var about = new Swiper ('.about-people', {
		// 如果需要分页器
		pagination: {
		  el: '.swiper-pagination',
		},
		
		// 如果需要前进后退按钮
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	})
	var about2 = new Swiper ('.about4-ban', {
		// 如果需要分页器
		pagination: {
		  el: '.swiper-pagination',
		},
		
		// 如果需要前进后退按钮
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	})
	
	// index banner6
	function tab(tab,penal){
		tab.click(function(){
			var i = $(this).index();//下标第一种写法
			$(this).addClass('active').siblings().removeClass('active');
			penal.eq(i).show().siblings().hide();
		})
	}
	tab($(".index-tab p"),$(".index-penal img"))
	tab($(".index-tab p"),$(".index-penal .money-pen-list"))
	tab($(".about-people-list li"))
	
})