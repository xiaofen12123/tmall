/*
* @Author: Administrator
* @Date:   2018-08-06 16:50:05
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-09 11:12:50
*/
$(document).ready(function(){
	y_brand();
});
function y_brand() {
	var now = 0;
	var timer = setInterval(autoplay
		, 3000);
	var arr = ["#2D0791","#000000","#03A4F9","#DDDDDD","#D31F23","#FED5AC"];
	function autoplay() {

		var before = now;
		if(now > 4) {
			now = 0;
		}else {
			now++;
		}
		change(now, before);
	}
	$("#y_slide").on('click','.y_bar1',function(){
		clearInterval(timer);
		var moment = $(this).data("num");
		console.log('click');
		change(moment, now);
		now = moment;
		timer = setInterval(autoplay
		, 3000);
	})

	function change(now, before) {
		$('.y_slide-banner .y_banner_content1').eq(now).fadeIn(500);
		$('.y_slide-banner .y_banner_content1').eq(before).hide();
		$('.y_slide-banner').css('backgroundColor',arr[now]);
		$('.y_bar1').eq(now).addClass('current').siblings('.y_bar1').removeClass('current');
	}
	$("#y_slide").on('hover', '.y_slide_banner_content',function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(autoplay
			, 3000);
	});
}