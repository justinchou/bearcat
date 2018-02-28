var Tank = function() {
	this.$id = "tank";
}

Tank.prototype.run = function() {
	console.log('HOTTAN: tank hot run ...');
	return 'tank hot ' + this.getNum();
}

Tank.prototype.getNum = function() {
	if (!this.num) {
		console.log('HOTTAN: set num');
		this.num = 100;
	}

	return this.num;
}

module.exports = Tank;


















