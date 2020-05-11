
const {Builder,By, Capabilities} = require('selenium-webdriver');
const caps = new Capabilities();
caps.setPageLoadStrategy("normal");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

(async function example() {
    let driver = await new Builder().
                withCapabilities(caps).
                forBrowser('chrome').
                build();
    try {
        // Navigate to Url
        await driver.get("http://sapotacorp.vn/pages/list");
        await driver.findElement(By.xpath("//form/div/input")).sendKeys("admin");
        await driver.findElement(By.css('input[type = password]')).sendKeys("7J+pW3rr!#@%^rrbw7iYR");
        await driver.findElement(By.css('button[type = submit]')).click();
        console.log ("login success");
        await sleep(2000);
        await driver.navigate().to("http://sapotacorp.vn/network/create");
        let url = await driver.getCurrentUrl();
        console.log(url);
    }
    finally {
        await driver.quit();
    }
})();