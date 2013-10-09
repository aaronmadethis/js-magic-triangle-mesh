var triangleClass = {
	all_points: "",
	t_colors: "",
	
	triangle_setup: function(start_x, start_y, box_size, start_c){
		new_x = start_x + box_size;
		new_y = start_y + box_size;
		center_x = start_x + box_size/2
		center_y = start_y + box_size/2
		
		this.all_points = new Array(5);
		
		var k = 0;
		while(k<5){
			this.all_points[k] = new Follow();
			k++;
		}
		this.all_points[0].follow_setup(start_x, start_y);
		this.all_points[1].follow_setup(new_x, start_y);
		this.all_points[2].follow_setup(start_x, new_y);
		this.all_points[3].follow_setup(new_x, new_y);
		this.all_points[4].follow_setup(center_x, center_y);

		this.t_colors = new Array(4);
		this.t_colors[0] = [ imgData.data[start_c], imgData.data[start_c+1], imgData.data[start_c+2], imgData.data[start_c+3] ];
		start_c = start_c + 4;
		this.t_colors[1] = [ imgData.data[start_c], imgData.data[start_c+1], imgData.data[start_c+2], imgData.data[start_c+3] ];
		start_c = start_c + 4*img.width;
		this.t_colors[2] = [ imgData.data[start_c], imgData.data[start_c+1], imgData.data[start_c+2], imgData.data[start_c+3] ];
		start_c = start_c + 4*img.width + 4;
		this.t_colors[3] = [ imgData.data[start_c], imgData.data[start_c+1], imgData.data[start_c+2], imgData.data[start_c+3] ];
		
	},
	
	triangle_update: function(){
		for(z=0;z<5;z++){
			this.all_points[z].follow_update();
		}	
	},
	
	triangle_display: function(){
		$context.beginPath();
        $context.moveTo( this.all_points[0].c_location.x, this.all_points[0].c_location.y );
		$context.lineTo( this.all_points[2].c_location.x, this.all_points[2].c_location.y );
		$context.lineTo( this.all_points[4].c_location.x, this.all_points[4].c_location.y );
		$context.closePath();
		$context.lineJoin = 'miter';
		$context.lineWidth = 1;
//		$context.strokeStyle = 'rgba(' + this.t_colors[0][0] + ', ' + this.t_colors[0][1] + ', ' + this.t_colors[0][2] + ', ' + this.t_colors[0][3] + ')';
//		$context.strokeStyle= '#ffffff';
//		$context.stroke();
		$context.fillStyle = 'rgba(' + this.t_colors[0][0] + ', ' + this.t_colors[0][1] + ', ' + this.t_colors[0][2] + ', ' + this.t_colors[0][3] + ')';
		$context.fill();

		$context.beginPath();
        $context.moveTo( this.all_points[0].c_location.x, this.all_points[0].c_location.y );
		$context.lineTo( this.all_points[1].c_location.x, this.all_points[1].c_location.y );
		$context.lineTo( this.all_points[4].c_location.x, this.all_points[4].c_location.y );
		$context.closePath();
		$context.lineJoin = 'miter';
		$context.lineWidth = 1;
//		$context.strokeStyle= '#ffffff';
//		$context.strokeStyle = 'rgba(' + this.t_colors[1][0] + ', ' + this.t_colors[1][1] + ', ' + this.t_colors[1][2] + ', ' + this.t_colors[1][3] + ')';
//		$context.stroke();
		$context.fillStyle = 'rgba(' + this.t_colors[1][0] + ', ' + this.t_colors[1][1] + ', ' + this.t_colors[1][2] + ', ' + this.t_colors[1][3] + ')';
		$context.fill();
		

		$context.beginPath();
		$context.moveTo( this.all_points[1].c_location.x, this.all_points[1].c_location.y );
		$context.lineTo( this.all_points[3].c_location.x, this.all_points[3].c_location.y );
		$context.lineTo( this.all_points[4].c_location.x, this.all_points[4].c_location.y );
		$context.closePath();
		$context.lineJoin = 'miter';
		$context.lineWidth = 1;
//		$context.strokeStyle= '#ffffff';
//		$context.strokeStyle = 'rgba(' + this.t_colors[2][0] + ', ' + this.t_colors[2][1] + ', ' + this.t_colors[2][2] + ', ' + this.t_colors[2][3] + ')';
//		$context.stroke();
		$context.fillStyle = 'rgba(' + this.t_colors[2][0] + ', ' + this.t_colors[2][1] + ', ' + this.t_colors[2][2] + ', ' + this.t_colors[2][3] + ')';
		$context.fill();

		$context.beginPath(); // bottom triangle
		$context.moveTo( this.all_points[2].c_location.x, this.all_points[2].c_location.y );
		$context.lineTo( this.all_points[3].c_location.x, this.all_points[3].c_location.y );
		$context.lineTo( this.all_points[4].c_location.x, this.all_points[4].c_location.y );
		$context.closePath();
		$context.lineJoin = 'miter';
		$context.lineWidth = 1;
//		$context.strokeStyle = 'rgba(' + this.t_colors[3][0] + ', ' + this.t_colors[3][1] + ', ' + this.t_colors[3][2] + ', ' + this.t_colors[3][3] + ')';
//		$context.strokeStyle= '#ffffff';
//		$context.stroke();
		$context.fillStyle = 'rgba(' + this.t_colors[3][0] + ', ' + this.t_colors[3][1] + ', ' + this.t_colors[3][2] + ', ' + this.t_colors[3][3] + ')';
		$context.fill();
		
	}
}

function Triangle() {
};

Triangle.prototype = triangleClass;