'use strict';

let Engine = function Engine() {
    this.$id = 'engine';
    this.$scope = 'prototype';
};

Engine.prototype.run = function () {
    console.log('engine run...');
};

bearcat.module(Engine, typeof module !== 'undefined' ? module : {});
