/**
 * Created by bearcatjs.
 * File: app.js
 * User: justin
 * Date: 1/3/2018
 * Time: 06:34
 */

'use strict';


let Bearcat = require('../../index');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');
    let bus = Bearcat.getBean('bus');
    bus.run();

    let car = Bearcat.getBean('car');
    car.run();
});