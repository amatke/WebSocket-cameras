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
	
	setInterval(main, 100);
	
	function main(){
		drawCanvas();
		readCanvas();
	}
	
	function drawCanvas(){
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
	}
	
	console.log(canvas.toDataURL('image/jpeg', 1));
	 
	function readCanvas(){
		var canvasData = canvas.toDataURL('image/jpeg', 1);
		var decodeAsstring = atob(canvas.split(',')[1]);
		
		var charArray = [];
		
		for(vari=0; i<decodeAsstring.length; i++){
			charArray.push(decodeAsstring.charCodeAt(i));
		}
	}

})();