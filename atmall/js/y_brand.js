/*
* @Author: Administrator
* @Date:   2018-08-07 09:16:50
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-09 11:15:49
*/

$(document).ready(function(){
	var fresh = 0;
	var fresh_src = [
		"../images/lxy/brand/4.webp",
		"../images/lxy/brand/5.png",
		"../images/lxy/brand/6.png",
		"../images/lxy/brand/7.png",
		"../images/lxy/brand/4.webp",
		"../images/lxy/brand/6.png",
		"../images/lxy/brand/7.png",
		"../images/lxy/brand/8.webp",
		"../images/lxy/brand/9.webp",
		"../images/lxy/brand/10.webp",
		"../images/lxy/brand/11.png",
		"../images/lxy/brand/12.png",
		"../images/lxy/brand/13.webp",
		"../images/lxy/brand/14.png",
		"../images/lxy/brand/15.webp",
		"../images/lxy/brand/16.png",
		"../images/lxy/brand/16.webp",
		"../images/lxy/brand/17.png",
		"../images/lxy/brand/17.webp",
		"../images/lxy/brand/18.png",
		"../images/lxy/brand/18.webp",
		"../images/lxy/brand/19.png",
		"../images/lxy/brand/19.webp",
		"../images/lxy/brand/20.png",
		"../images/lxy/brand/20.webp",
		"../images/lxy/brand/21.png",
		"../images/lxy/brand/21.webp",
		"../images/lxy/brand/22.png",
		"../images/lxy/brand/23.png",
		"../images/lxy/brand/24.png",
		"../images/lxy/brand/25.png",
	];
	var fresh_src1 = ["../images/lxy/brand/2/1.webp",
		"../images/lxy/brand/2/2.webp",
		"../images/lxy/brand/2/3.webp",
		"../images/lxy/brand/2/4.webp",
		"../images/lxy/brand/2/5.webp",
		"../images/lxy/brand/2/6.webp",
		"../images/lxy/brand/2/7.webp",
		"../images/lxy/brand/2/8.webp",
		"../images/lxy/brand/2/9.webp",
		"../images/lxy/brand/2/10.webp",
		"../images/lxy/brand/2/11.webp",
		"../images/lxy/brand/2/12.webp",
		"../images/lxy/brand/2/13.webp",
		"../images/lxy/brand/2/14.webp",
		"../images/lxy/brand/2/15.webp",
		"../images/lxy/brand/2/16.webp",
		"../images/lxy/brand/2/17.webp",
		"../images/lxy/brand/2/18.webp",
		"../images/lxy/brand/2/19.webp",
		"../images/lxy/brand/2/1.png",
		"../images/lxy/brand/2/2.png",
		"../images/lxy/brand/2/3.png",
		"../images/lxy/brand/2/4.png",
		"../images/lxy/brand/2/5.png",
		"../images/lxy/brand/2/6.png",
		"../images/lxy/brand/2/7.png",
		"../images/lxy/brand/2/8.png",
		"../images/lxy/brand/2/9.png",
		"../images/lxy/brand/2/10.png"
	];
	var fresh_src2 = ["../images/lxy/brand/3/1.jpg",
		"../images/lxy/brand/3/1.webp",
		"../images/lxy/brand/3/2.webp",
		"../images/lxy/brand/3/3.webp",
		"../images/lxy/brand/3/4.webp",
		"../images/lxy/brand/3/5.webp",
		"../images/lxy/brand/3/6.webp",
		"../images/lxy/brand/3/7.webp",
		"../images/lxy/brand/3/8.webp",
		"../images/lxy/brand/3/9.webp",
		"../images/lxy/brand/3/10.webp",
		"../images/lxy/brand/3/11.webp",
		"../images/lxy/brand/3/12.webp",
		"../images/lxy/brand/3/13.webp",
		"../images/lxy/brand/3/14.webp",
		"../images/lxy/brand/3/15.webp",
		"../images/lxy/brand/3/16.webp",
		"../images/lxy/brand/3/17.webp",
		"../images/lxy/brand/3/18.webp",
		"../images/lxy/brand/3/1.png",
		"../images/lxy/brand/3/11.png",
		"../images/lxy/brand/3/3.png",
		"../images/lxy/brand/3/4.png",
		"../images/lxy/brand/3/5.png",
		"../images/lxy/brand/3/6.png",
		"../images/lxy/brand/3/7.png",
		"../images/lxy/brand/3/8.png",
		"../images/lxy/brand/3/9.png",
		"../images/lxy/brand/3/10.png"
	];
	$('#y_brand').on('click','.y_refresh',function(){
		if(fresh > 1) {
			fresh = 0;
		}
		else {
			fresh++;
		}
		var $y_small_demo = $('.y_small-demo');
		console.log($y_small_demo.length);
		var time;
		fn2(fresh);

		function fn(time, callback) {
			setTimeout(function(){
				callback();
			}, time*1000+200);
		}
		function fn2(a){
			console.log("a"+a);
			for(let i = 0; i< $y_small_demo.length;i++) {
				// time = Math.random()*1 + 0.1;
				if(i <10)
				{
					time = (i%5)*0.1;
				}else if(i<20 && i>=10){
					time = (i%5)*0.1 + 0.5;
				}else {
					time = (i%5)*0.1 + 1;
				}
				$('.y_small-demo').eq(i).css("animation","y_rotateY linear 0.2s "+time+"s");
				$('.y_small-demo').eq(i).css("animation-play-state","running");
				fn(time,function(){
					if(a==1){
						$('.y_small-demo').eq(i).find("img").attr("src",fresh_src1[i]);
					}else if(a==2) {
						$('.y_small-demo').eq(i).find("img").attr("src",fresh_src2[i]);
					}else {
						$('.y_small-demo').eq(i).find("img").attr("src",fresh_src[i]);
					}
					$('.y_small-demo').eq(i).css("animation-play-state","paused");
					$('.y_small-demo').eq(i).css("animation","y_rotateY2 linear 0.2s "+0+"s");
					$('.y_small-demo').eq(i).css("animation-play-state","running");
				});

			}
		}
		
	});
})