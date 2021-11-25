// index.js
const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');
let array_urls = {
    'https://vncloudsco.github.io/': 'home', 
};
for (var key in array_urls) {
    console.log("key " + key + " has value " + array_urls[key]);
    scrape({
        urls: [key],
        directory: path.resolve(__dirname, array_urls[key]),
        plugins: [ 
            new PuppeteerPlugin({
                launchOptions: { 
                    // If you set  this to true, the headless browser will show up on screen
                    headless: true
                }, /* optional */
                scrollToBottom: {
                    timeout: 10000, 
                    viewportN: 10 
                } /* optional */
            })
        ]
    });
}
