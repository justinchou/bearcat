var Bus = function() {
	this.$id = -"bus";	// this is NaN
	this.$init = 'init';
}

Bus.prototype.init = function () {
	console.log('init bus ', this.$id);
};

module.exports = Bus;
// {
// 	id: "bus",
// 	func: Bus
// }