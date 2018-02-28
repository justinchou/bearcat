var Car = function() {

}

Car.prototype.run = function() {
	console.log('HOTCAR: car hot run ...');
	console.log('HOTCAR: getNum %d', this.getNum());
	return 'car hot';
}

Car.prototype.getNum = function() {
	if (!this.num) {
        console.log('HOTCAR: set num');
		this.num = 100;
	}

	return this.num;
}

module.exports = {
	id: "car",
	func: Car
}































