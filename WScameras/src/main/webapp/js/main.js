/**
 * 
 */

(function(){
	var video = document.querySelector('video');
	var canvas = document.querySelector('canvas');
	var img = document.querySelector('img');
	var context=canvas.getContext('2d');
	
	var constraints={
			video:true,
			audio:false,
			video: { width: 1280, height: 720 }
	};
	
	navigator.mediaDevices.getUserMedia(constraints)
	.then(function(stream) {
		video.srcObject=stream;
		video.play();
	})
	.catch(function(err) {
	  /* handle the error */
	});
	
	setInterval(drawCanvas, 100);
	
	function drawCanvas(){
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
	}

})();