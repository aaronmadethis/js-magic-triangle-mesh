var vectorClass = {
	"x": "",
	"y": "",
	normalize: function(){
		var length = this.length();
		var new_x = this.x / length;
		var new_y = this.y / length;
		this.x = new_x;
		this.y = new_y;
	},
	length: function(){
		var length = Math.sqrt( (this.x * this.x) + (this.y * this.y) );
		return length;
	},
	multiply: function(value){
		var new_x = this.x * value;
		var new_y = this.y * value;
		this.x = new_x;
		this.y = new_y;
	},
	add: function(vector){
		var new_x = this.x + vector.x;
		var new_y = this.y + vector.y;
		this.x = new_x;
		this.y = new_y;
	},
	sub: function(vector){
		var new_x = this.x - vector.x;
		var new_y = this.y - vector.y;
		this.x = new_x;
		this.y = new_y;
	},
	limit: function(value){
		var length1 = this.length();
		var length2 = Math.sqrt( (value * value) + (value * value) );
		if (length1 > length2){
			this.normalize();
			this.multiply(value);
		}
	},
	angle_radians: function(){
		var radians = this.y / this.length();
		radians = Math.asin(radians);
		return radians;
	},
	angle_degrees: function(){
		var degrees = this.angle_radians() * 180 / Math.PI;
		return degrees;
	}
}

function Vector(x, y) {
	this.x = x;
	this.y = y;
};

Vector.prototype = vectorClass;


function subVector (vector1, vector2) {
	var new_x = vector1.x - vector2.x;
	var new_y = vector1.y - vector2.y;
	return new Vector(new_x, new_y);
}

function addVector (vector1, vector2) {
	var new_x = vector1.x + vector2.x;
	var new_y = vector1.y + vector2.y;
	return new Vector(new_x, new_y);
}

function distanceVectors (vector1, vector2){
	var new_vector = subVector(vector1, vector2);
	length = Math.sqrt( (new_vector.x * new_vector.x) + (new_vector.y * new_vector.y) );
	return length;
	
}