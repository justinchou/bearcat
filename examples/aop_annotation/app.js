/**
 * Created by bearcatjs.
 * File: app.js
 * User: justin
 * Date: 1/3/2018
 * Time: 06:30
 */

'use strict';


let Bearcat = require('../../index');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');
    let bus = Bearcat.getBean('car');
    bus.runBefore(function (err, data) {
        console.log('===data %s err', data, err);
    });
    bus.runBeforeError(function (err, data){
        console.log('===data %s err', data, err);
    });

    let wheel = Bearcat.getBean('wheel');
    wheel.runBefore(function (err, data) {
        console.log('---data %s err', data, err);
    });
    wheel.runBeforeError(function (err, data){
        console.log('---data %s err', data, err);
    });
});