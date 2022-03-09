import React from 'react'
const puppeteer = require ('autocode-puppeteer');

function DevFind() {

    
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto('https://dev.to/search?q=web%20dev%20nodejs');
    let data = await page.content();
    console.log(data);
    await browser.close();

  return (
    <div>DevFind</div>
  )
}

export default DevFind