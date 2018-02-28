'use strict';

const Path    = require('path');
const Bearcat = require('../../index');

let configPaths = [require.resolve('./context.json')];
Bearcat.createApp(configPaths, {
    // NODE_ENV: '',
    // BEARCAT_ENV: '',
    // NODE_CPATH: '',
    // BEARCAT_CPATH: '',
    // BEARCAT_LOGGER: 'on',
    BEARCAT_HOT: 'off',
    BEARCAT_HPATH: Path.join(__dirname, '/app'),
    // BEARCAT_ANNOTATION: 'on',
    BEARCAT_GLOBAL: true
});

Bearcat.on('reload', function () {
    // console.log('reload occured...');
});
Bearcat.start(function () {
    // console.log('Bearcat ioc container started...');

    let car = Bearcat.getBean('car', '辽B345230');
    car.run();

    let bus = Bearcat.getBean('bus');
    bus.run();

    let moto = Bearcat.getBean('moto', '辽A374913');
    moto.run();

    let truck = Bearcat.getBean('truck');
    truck.run();
});