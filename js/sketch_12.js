var box_size = 35,
	num_boxes_x = 50,
 	num_boxes_y = 30,
 	left_margin = 0,
 	top_margin = 0,
 	t,
 	run = "",
 	mouse_track = new Vector(0,0),
 	total_boxes = num_boxes_x * num_boxes_y,
 	mouse_area = 100,
 	triangle_boxes = new Array();

jQuery(document).ready(function($) {

	var $canvas = $("#myCanvas");
	$context = $canvas.get(0).getContext("2d");


	$('body').css('overflow','hidden');
	
    $(document).mousemove(function(e){
        mouse_track.x = e.pageX;
        mouse_track.y = e.pageY;
    })
	
	img = new Image();
	
	img.onload = function (){
		var temp_canvas = document.createElement('canvas');
		var temp_context = temp_canvas.getContext('2d');
		temp_context.drawImage(img, 0, 0);		
		imgData = temp_context.getImageData(0,0,img.width,img.height);
		k=new Array();
		a=0;
		for(i=0; i < num_boxes_y; i++ ){
			for(j=0; j < num_boxes_x; j++){
				c = (j*2)+(i*(img.width * 2));
				c = c*4;
				k[a] = imgData.data[(c)+3]+imgData.data[(c+4)+3]+imgData.data[(c+4*img.width)+3]+imgData.data[(c+4*img.width+4)+3];
				a++;
			}
		}
		setup(); // run the setup
	};
	img.src = "sample_test.png";
	
	function draw () {
		$context.fillRect(0,0, $canvas.width(), $canvas.height());
		$context.fillStyle="rgba(8,8,12,.65)";
		
		for(i=0;i<triangle_boxes.length;i++){
			if(k[i] !=0){
				triangle_boxes[i].triangle_update();
				triangle_boxes[i].triangle_display();
			}
		}
	}
		
	function start_draw(){
		if(run==""){
	    	run=setInterval(function(){draw()},0035);
	    }else{
	    	stop_draw();
	    }
	};
	
	function stop_draw(){
		if(run!=""){
			window.clearInterval(run);
			run="";
		}
	};

	function setup () {
		stop_draw();
		triangle_boxes.length = 0;
		triangle_boxes.length = total_boxes;
		t = 0;
		
		$canvas.attr("width",  $(window).width());
		$canvas.attr("height", $(window).height());
		
		left_margin = ($canvas.width() - (num_boxes_x * box_size))/2;
		top_margin = ($canvas.height() - (num_boxes_y * box_size))/2;

		while(t < triangle_boxes.length){
			for(i=0; i < num_boxes_y; i++ ){
				for(j=0; j < num_boxes_x; j++){
					var start_x = left_margin + (box_size*j);
					var start_y = top_margin + (box_size*i);
					var start_c = (j*2)+(i*(img.width * 2));
					start_c = start_c*4;
					if(k[t] != 0){
						triangle_boxes[t] = new Triangle();
						triangle_boxes[t].triangle_setup(start_x, start_y, box_size, start_c);
					}
					t++;
				}
			}
		}		
		start_draw();
	};

	$(window).bind("resize", function() { setup(); });
	
});

