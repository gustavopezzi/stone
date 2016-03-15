document.addEventListener("DOMContentLoaded", function (event) {
    var R = window.innerHeight / 3;
    var NUM_LINES = 12000;
    var CHUNK_SIZE = 300;

    var linesDrawn = 0;

    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = R * 2;
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.arc(R, R, R, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';

    function draw() {
        var STEP_SIZE = Math.min(CHUNK_SIZE, NUM_LINES - linesDrawn);

        if (STEP_SIZE <= 0) {
            return canvas.style.opacity = 1;
        }

        ctx.beginPath();

    	for (var i = 0; i < STEP_SIZE; i++) {
    		var A = Math.random() * Math.PI * 2;
    		var B = Math.random() * Math.PI * 2;
    		ctx.moveTo((1 + Math.cos(A)) * R, (1 + Math.sin(A)) * R);
    		ctx.lineTo((1 + Math.cos(B)) * R, (1 + Math.sin(B)) * R);
    	}

        ctx.stroke();

    	linesDrawn += STEP_SIZE;
    	canvas.style.opacity = linesDrawn / NUM_LINES;

    	requestAnimationFrame(draw);
    }

    draw();
});