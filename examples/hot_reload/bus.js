var Bus = function() {
	this.$id = "bus";
	this.$scope = "prototype";
}

Bus.prototype.run = function() {
    console.log('BUS: run bus...');
	return 'bus';
}

module.exports = Bus;