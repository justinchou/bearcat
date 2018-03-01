/**
 * Created by bearcatjs.
 * File: app.js
 * User: justin
 * Date: 1/3/2018
 * Time: 17:35
 */

'use strict';


let Bearcat = require('../../');
let configPaths = [require.resolve('./context.json')];
// let Car = ;

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');
    let car = Bearcat.getBean('car');
    car.run();

    let car2 = new (require('./app/car_with'))();
    car2.run();
});