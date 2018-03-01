/**
 * Created by bearcatjs.
 * File: app.js
 * User: justin
 * Date: 1/3/2018
 * Time: 17:55
 */

'use strict';


let Bearcat = require('../../');
let configPaths = [require.resolve('./context.json')];

Bearcat.createApp(configPaths, {});
Bearcat.start(function () {
    console.log('Bearcat IoC container started');

    // 文件中的meta会覆盖context中的配置, 但是id不能冲突(参考simple_meta_mismatch)
    // 貌似配置了context或者文件meta, $的配置就不生效了
    let car = Bearcat.getBean('car');
    car.run();
});