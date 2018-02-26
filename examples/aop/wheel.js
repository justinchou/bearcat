var Wheel = function() {

}

module.exports = Wheel;

Wheel.prototype.doWheel = function() {

}

Wheel.prototype.runBeforeSync = function() {
    console.log('   Wheel runBeforeSync wheel...');
    return 'runBeforeSync';
}

Wheel.prototype.runBefore = function(cb) {
    console.log('   Wheel runBefore wheel...');
    cb(null, 'wheel');
}

Wheel.prototype.runBeforeError = function(cb) {
    console.log('   Wheel runBeforeError wheel...');
    cb(null, 'wheel');
}