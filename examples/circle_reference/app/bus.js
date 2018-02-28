var Bus = function() {
	this.$id = "bus";
	this.$car = null;
}

Bus.prototype.run = function() {
	console.log('run bus...');
	// this.$car.run();
	return 'bus';
}

module.exports = Bus;