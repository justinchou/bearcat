var Car = function() {
	this.$id = "car";
}

Car.prototype.run = function() {
	console.log('run car1...');
	return 'car 1';
}

module.exports = Car;