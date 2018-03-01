var Car = function() {
	// this.$id = "car2";
	this.num = null;
	// this.$init = 'init3';
}

Car.prototype.init = function () {
	console.log('init car');
}

Car.prototype.init2 = function () {
    console.log('init2 car');
}

Car.prototype.init3 = function () {
    console.log('init3 car');
}

Car.prototype.run = function() {
	console.log('run car...');
	return 'car' + this.num;
}

module.exports = {
	id: "car",
	func: Car,
	// init: 'init2',
	scope: "singleton",
	// scope: "prototype",
	props: [{
		name: "num",
		value: 100
	}]
};