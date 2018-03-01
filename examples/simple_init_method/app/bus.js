var Bus = function() {
    this.$id = "bus";
    // this.$scope = "prototype";
    this.$init = "init";
    this.num = 0;
}

Bus.prototype.init = function() {
    console.log('init bus...');
    this.num = 1;
    return 'init bus';
}

Bus.prototype.run = function() {
    console.log('run bus...');
    return 'bus ' + this.num;
}

module.exports = Bus;