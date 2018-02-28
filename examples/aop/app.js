/**
 * Created by examples.
 * File: app.js
 * User: justin
 * Date: 26/2/2018
 * Time: 00:21
 */

'use strict';

let Bearcat = require('../../index');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('===Bearcat IoC container started');
    let bus = Bearcat.getBean('car');
    bus.runBefore(function (err, data) {
        console.log('===data %s err', data, err);
    });
    // car.runBeforeError(function (err, data){
    //     console.log('===data %s err', data, err);
    // });

    let wheel = Bearcat.getBean('wheel');
    wheel.runBefore(function (err, data) {
        console.log('---data %s err', data, err);
    });
    // wheel.runBeforeError(function (err, data){
    //     console.log('---data %s err', data, err);
    // });
});