var Car = function() {
	this.$id = "car";
	this.$bus = null;
}

Car.prototype.run = function() {
	console.log('run car...');
	// this.$bus.run();
	return 'car';
}

module.exports = Car;