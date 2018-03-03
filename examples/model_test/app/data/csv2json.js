/**
 * Created by bearcatjs.
 * File: csv2json.js.js
 * User: justin
 * Date: 3/3/2018
 * Time: 23:15
 */

'use strict';

let FS = require('fs');
let Path = require('path');

let name = Path.join(__dirname, '/mockResultDB.csv');
let content = FS.readFileSync(name, 'utf8');
let rows = content.split(/[\n\r]/g);
let keys = rows.shift().split(/[\t]/g);
console.log(keys);
let objs = [];
for (let i = 0; i < rows.length; i++) {
    let row = rows[i].split(/\t/g);
    let obj = {};
    for (let j = 0; j < keys.length; j++) {
        obj[keys[j]] = keys[j].match(/id/) ? parseInt(row[j]) : row[j];
    }
    objs.push(obj);
}
console.log(objs);
FS.writeFileSync(name + '.json', JSON.stringify(objs, null, 2));