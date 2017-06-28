(function($){
	"use strict";

	$(document).ready(function(){

		// Multi-Page
		$('#slider1').revolution({
			sliderLayout:"standard",
			delay:12000,
			responsiveLevels:[1280,1024,778,420],
			gridwidth:[1280,1024,860,420],
			gridheight:[900,800,600,500],
			minHeight: 300,

			hideThumbs:10,
			fullScreenAutoWidth:"on",

			navigation: {
				onHoverStop: "off",

				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				},

				arrows:{
					enable:true,
					style: "hermes",
					tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
					left: {
						h_align: "left",
						v_align: "center",
						h_offset: 0,
						v_offset: 0
					},
					right: {
						h_align: "right",
						v_align: "center",
						h_offset: 0,
						v_offset: 0
					}
				},

				bullets:{
					style:"",
					enable:true,
					hide_onmobile:true,
					hide_onleave:true,
					hide_delay:200,
					hide_delay_mobile:1200,
					hide_under:0,
					hide_over:9999, 
					direction:"horizontal",
					space:10,       
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:40,
					tmp: ''
				},
			},

			parallax:{
				type:"scroll",
				levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
				origo:"slidercenter",
				speed:2000,
				bgparallax:"on",
				disable_onmobile:"on"
			},

			spinner:"spinner4"
		});


		// Onepage
		$('#slider2').revolution({
			sliderLayout:"fullscreen",
			sliderType:"hero",
			delay:12000,
			responsiveLevels:[4096,1024,778,420],
			gridwidth:[1200,1024,860,540],
			gridheight:[900,800,600,600],
			minHeight: 300,

			hideThumbs:10,
			fullScreenAutoWidth:"on",

			parallax:{
				type:"scroll",
				levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
				origo:"slidercenter",
				speed:2000,
				bgparallax:"on",
				disable_onmobile:"on"
			},

			spinner:"spinner4"
		});


		// Business
		$('#slider3').revolution({
			sliderLayout:"standard",
			delay:12000,
			responsiveLevels:[4096,1024,778,420],
			gridwidth:[1200,1024,860,460],
			gridheight:[600,560,500,420],
			minHeight: 300,

			hideThumbs:10,
			fullScreenAutoWidth:"on",

			navigation: {
				onHoverStop: "off",

				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				},

				arrows:{
					enable:true,
					style: "hermes",
					tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
					left: {
						h_align: "left",
						v_align: "center",
						h_offset: 0,
						v_offset: 0
					},
					right: {
						h_align: "right",
						v_align: "center",
						h_offset: 0,
						v_offset: 0
					}
				},

				bullets:{
					style:"",
					enable:true,
					hide_onmobile:true,
					hide_onleave:true,
					hide_delay:200,
					hide_delay_mobile:1200,
					hide_under:0,
					hide_over:9999, 
					direction:"horizontal",
					space:10,       
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:40,
					tmp: ''
				},
			},

			parallax:{
				type:"scroll",
				levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
				origo:"slidercenter",
				speed:2000,
				bgparallax:"on",
				disable_onmobile:"on"
			},

			spinner:"spinner4"
		});


		// Agency
		$('#slider4').revolution({
			sliderLayout:"fullscreen",
			sliderType:"hero",
			delay:12000,
			responsiveLevels:[4096,1024,778,420],
			gridwidth:[1200,1024,860,460],
			gridheight:[600,560,500,360],
			minHeight: 300,

			hideThumbs:10,
			fullScreenAutoWidth:"on",

			navigation: {
				onHoverStop: "off",

				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				},

				arrows:{
					enable:true,
					style: "hermes",
					tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
					left: {
						h_align: "left",
						v_align: "center",
						h_offset: 0,
						v_offset: 0
					},
					right: {
						h_align: "right",
						v_align: "center",
						h_offset: 0,
						v_offset: 0
					}
				},

				bullets:{
					style:"",
					enable:true,
					hide_onmobile:true,
					hide_onleave:true,
					hide_delay:200,
					hide_delay_mobile:1200,
					hide_under:0,
					hide_over:9999, 
					direction:"horizontal",
					space:10,       
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:40,
					tmp: ''
				},
			},

			parallax:{
				type:"scroll",
				levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
				origo:"slidercenter",
				speed:2000,
				bgparallax:"on",
				disable_onmobile:"on"
			},

			spinner:"spinner4"
		});

	});
	
})(jQuery);