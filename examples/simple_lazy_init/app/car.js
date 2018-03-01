var Car = function() {
	this.$id = "car";
	this.$init = 'init';
	this.$lazy = true;
}

Car.prototype.init = function () {
	console.log('init car');
};

Car.prototype.run = function() {
	console.log('run car...');
	return 'car';
}

module.exports = Car;