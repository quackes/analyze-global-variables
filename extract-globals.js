const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

module.exports = async function(jsFile){

    const template = fs.readFileSync(require.resolve('./extract-variables.html'), 'utf8');
    const jsBase64Content = fs.readFileSync(path.resolve(__dirname, jsFile), 'base64');
    const htmlContent = template.replace(/{jsfile}/, jsBase64Content);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);

    let windowDiff = await page.$eval('#window-diff', el => {
        return el.innerHTML;
    });
    let elementsToExport = JSON.parse(windowDiff);

    await browser.close();
    return elementsToExport;
};
