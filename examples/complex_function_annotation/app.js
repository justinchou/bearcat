/**
 * Created by bearcatjs.
 * File: app.js
 * User: justin
 * Date: 1/3/2018
 * Time: 06:37
 */

'use strict';


let Bearcat = require('../../index');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');

    let car = Bearcat.getBean('car');
    car.run();
});