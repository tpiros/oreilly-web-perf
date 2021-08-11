const puppeteer = require('puppeteer');
const fs = require('fs');

const args = process.argv.splice(2);
if (args.length === 0) {
  console.log(`Please provide an argument of 'css' or 'js'`);
  process.exit();
}

if (args.includes('css')) {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.coverage.startCSSCoverage();
    await page.goto('https://localhost:8080/article');
    const css_coverage = await page.coverage.stopCSSCoverage();
    
    let css_used_bytes = 0;
    let css_total_bytes = 0;
    let covered_css = '';
    
    for (const entry of css_coverage) {
      css_total_bytes += entry.text.length;
      console.log(`Total Bytes for ${entry.url}: ${entry.text.length}`);
      for (const range of entry.ranges){
          css_used_bytes += range.end - range.start - 1;
          covered_css += entry.text.slice(range.start, range.end) + "\n";
      }       
    }
  
    console.log(`Total Bytes of CSS: ${css_total_bytes}`);
    console.log(`Used Bytes of CSS: ${css_used_bytes}`);
    fs.writeFile("./exported_css.css", covered_css, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('The file was saved!');
    }); 
  
    await browser.close();
  })();
}

if (args.includes('js')) {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.coverage.startJSCoverage();
    await page.goto('https://localhost:8080/article');
    const js_coverage = await page.coverage.stopJSCoverage();
    
    let js_used_bytes = 0;
    let js_total_bytes = 0;
    let covered_js = '';
    
    for (const entry of js_coverage) {
      js_total_bytes += entry.text.length;
      console.log(`Total Bytes for ${entry.url}: ${entry.text.length}`);
      for (const range of entry.ranges){
          js_used_bytes += range.end - range.start - 1;
          covered_js += entry.text.slice(range.start, range.end) + "\n";
      }       
    }
  
    console.log(`Total Bytes of JS: ${js_total_bytes}`);
    console.log(`Used Bytes of JS: ${js_used_bytes}`);
    fs.writeFile("./exported_js.css", covered_js, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log('The file was saved!');
    }); 
  
    await browser.close();
  })();
}

