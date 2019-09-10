
const test = require('ava');
const extractGlobals = require('./extract-globals');

test.cb('should return globals from passeded file', t =>{
    extractGlobals('./test/file-with-globalscope.js')
        .then(result => {
            t.true(result.includes('myglobal'));
            t.true(result.includes('myotherglobal'));

            t.end();
        });
});