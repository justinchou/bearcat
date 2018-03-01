/**
 * Created by bearcatjs.
 * File: app.js
 * User: justin
 * Date: 1/3/2018
 * Time: 18:31
 */

'use strict';


let Bearcat = require('../../');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');
    let car = Bearcat.getBean('car');
    car.run();

    let car2 = Bearcat.getBean('car');
    car2.run();

    console.log(car === car2);
});