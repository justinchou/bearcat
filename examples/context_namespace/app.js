/**
 * Created by bearcatjs.
 * File: app.js
 * User: justin
 * Date: 1/3/2018
 * Time: 06:38
 */

'use strict';


let Bearcat = require('../../index');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');

    // 调用的namespace不对
    let car = Bearcat.getBean('car');
    car.run();

    let car1 = Bearcat.getBean('app1:car');
    car1.run();

    let car2 = Bearcat.getBean('app2:car');
    car2.run();
});