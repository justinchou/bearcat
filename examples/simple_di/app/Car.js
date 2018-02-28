'use strict';

let Car = function Car($engine, licence) {
    this.$id = 'car';
    this.$scope = 'prototype';
    this.$parent = 'transport';

    this.engine = $engine;
    this.licence = licence;
};

Car.prototype.run = function () {
    this.engine.run();
    console.log('please show me your **  car  ** licence, my licence is [ %s ]', this.licence);
};

bearcat.module(Car, typeof module !== 'undefined' ? module : {});