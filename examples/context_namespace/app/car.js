var Car = function() {
	this.$id = "car";
	this.$Nbus = "app1:car";
	this.$Ncar = "app2:car";
}

Car.prototype.run = function() {
	console.log('run car...');
	var bus = this.$Nbus.run();
	var car = this.$Ncar.run();
	return 'car';
}

module.exports = Car;