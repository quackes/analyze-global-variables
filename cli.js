#!/usr/bin/env node


const process = require('process');
const extractGlobals = require('./generate-source');

const args = process.argv;

if(args.length < 3){
    console.error('no file provided. pass file path to process.');
    process.exit(1)
}

const jsFile = args[2];

require('./extract-globals')(jsFile)
    .then((elementsToExport) =>{
        process.stdout.write(extractGlobals(elementsToExport));
        process.exit(0);
    });

