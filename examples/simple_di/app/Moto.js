'use strict';

let Moto = function Moto(engine, licence) {
    this.engine = engine;
    this.licence = licence;
};

Moto.prototype.run = function () {
    this.engine.run();
    console.log('please show me your ** moto  ** licence, my licence is [ %s ]', this.licence);
};

bearcat.meta({
    id: 'moto',
    func: Moto,
    scope: 'prototype',
    parent: 'transport',
    args: [{
        name: 'engine',
        ref: 'engine'
    }, {
        name: 'licence',
        type: 'String'
    }, {
        name: 'haha',
        type: 'String'
    }]
}, typeof module !== 'undefined' ? module : {});