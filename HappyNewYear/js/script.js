window.onload = function() {

	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");

	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

	// 当音乐播放完停止时候，自动停止光盘旋转效果
	audio.addEventListener("ended", function(event) {
		music.setAttribute("class", "");
	}, false);

	// 300ms延时，为了监听手机是触摸还是长按
	// music.onclick=  function() {
	// 	if (audio.paused) {
	// 		audio.play();
	// 		// this.style.animationPlayState = "running";
	// 		// this.style.webkitAnimationPlayState = "running";
	// 		 this.setAttribute("class", "play");
	// 	} else {
	// 		audio.pause();			
	// 		this.setAttribute("class", "");
	// 		// this.style.animationPlayState = "paused";
	// 		// this.style.webkitAnimationPlayState = "paused";
	// 	}
	// };

	music.addEventListener("touchstart", function(event) {
		if (audio.paused) {
			audio.play();
			// this.style.animationPlayState = "running";
			// this.style.webkitAnimationPlayState = "running";
			 this.setAttribute("class", "play");
		} else {
			audio.pause();			
			this.setAttribute("class", "");
			// this.style.animationPlayState = "paused";
			// this.style.webkitAnimationPlayState = "paused";
		}		
	}, false);

	page1.addEventListener("touchstart", function(event) {
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top = "100%";

		setTimeout(function() {
			page2.setAttribute("class", "page fadeOut");
			page3.setAttribute("class", "page fadeIn");
		}, 5000);

	}, false);


};