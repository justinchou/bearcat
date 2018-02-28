var Car = function() {
	this.$id = "car";
}

Car.prototype.run = function() {
	console.log('run car2...');
	return 'car 2';
}

module.exports = Car;