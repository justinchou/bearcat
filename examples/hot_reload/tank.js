var Tank = function() {
	this.$id = "tank";
}

Tank.prototype.run = function() {
	console.log('TAN: tank run ...');
	return 'tank';
}

module.exports = Tank;