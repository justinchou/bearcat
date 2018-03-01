/**
 * Created by bearcatjs.
 * File: app.js
 * User: justin
 * Date: 1/3/2018
 * Time: 18:05
 */

'use strict';


let Bearcat = require('../../');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');

});