var followClass = {
	home: ["x", "y"],
	c_location: ["x", "y"],
	velocity: ["x", "y"],
	topspeed: 4,
	dis_mouse: "",
	dis_home: "",
	dis_m_h: "",
	
	follow_setup: function (start_x, start_y){
		this.home = new Vector(start_x, start_y);
		this.c_location = new Vector(start_x, start_y);
		this.velocity = new Vector(0,0);
	},
	
	follow_update: function () {
		var mouse_d = subVector(mouse_track, this.c_location);
		mouse_d.normalize();
		//mouse_d.multiply(0.1);
		var home_d = subVector(this.home, this.c_location);
		home_d.normalize();
		home_d.multiply(5);
		this.dis_mouse = distanceVectors(mouse_track, this.c_location);
		this.dis_home = distanceVectors(this.c_location, this.home);
		this.dis_m_h = distanceVectors(mouse_track, this.home);
		
		if(this.dis_m_h < mouse_area){
//			console.log("mouse is in area");
			this.velocity.add(mouse_d);
			this.velocity.multiply(.9);
			this.c_location.add(this.velocity);			
		  	if(this.dis_mouse < 10){
//				console.log("ball close to mouse")
				this.velocity.multiply(1.1);
			 	this.c_location.add(this.velocity);
			}
		}/*else if(this.dis_home > 3){
//			console.log("ball heading home");
			this.velocity.add(home_d);
			this.velocity.multiply(.85);
		  	this.c_location.add(this.velocity);
		}else{
//			console.log("ball at home");
			this.velocity.multiply(0);
			this.c_location.x = this.home.x;
			this.c_location.y = this.home.y;
		}*/		
	}
}

function Follow() {
};

Follow.prototype = followClass;