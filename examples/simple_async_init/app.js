/**
 * Created by bearcatjs.
 * File: app.js
 * User: justin
 * Date: 1/3/2018
 * Time: 08:33
 */

'use strict';


let Bearcat = require('../../');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');
    let car = Bearcat.getBean('car');
    let r = car.run();
    console.log(r);

    let bus = Bearcat.getBean('bus');
    let s = bus.run();
    console.log(s);
});