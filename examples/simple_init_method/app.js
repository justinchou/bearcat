/**
 * Created by bearcatjs.
 * File: app.js
 * User: justin
 * Date: 1/3/2018
 * Time: 17:10
 */

'use strict';


let Bearcat = require('../../');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');

    let i = 0;
    let interval = setInterval(function () {
        console.log("==== ", i);
        let car = Bearcat.getBean('car');
        car.run();

        let bus = Bearcat.getBean('bus');
        bus.run();

        i += 1;
        if (i === 5) {
            clearInterval(interval);
            Bearcat.stop();
        }
    }, 100);
});