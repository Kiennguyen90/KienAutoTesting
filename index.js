
const {Builder, By, Key, util, Capabilities} = require("selenium-webdriver");
const caps = new Capabilities();
caps.setPageLoadStrategy("eager");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// function writeScreenshot(data, name) {
//     name = name || 'ss.png';
//     var screenshotPath = 'C:\Users\Kien\Desktop\AutoTesting\KienAutoTesting';
//     fs.writeFileSync(screenshotPath + name, data, 'base64');
//   };

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://mbbank5.mangoads.com.vn/");
    await driver.findElement(By.id("search")).sendKeys("Cho vay");
    await driver.findElement(By.id("search")).sendKeys(Key.RETURN);
    await sleep(2000);
    var screenshot = browser.saveScreenshot(); // returns base64 string buffer
    fs.writeFileSync('./myShort.png', screenshot)
    // await driver.findElement(By.css("input[type=text]")).sendKeys("Cho vay mua");
    // await driver.findElement(By.css("input[type=text]")).sendKeys(Key.RETURN);
    // console.log(await driver.getCurrentUrl());

    
    // let nav =  driver.findElement(By.xpath("//form/div/input"));
    // console.log(nav);
    // await driver.get("https://www.facebook.com//")
    // await driver.findElement(By.css("input[type = email]")).sendKeys("boyit1@yahoo.com");
    // await driver.findElement(By.css("input[type = password]")).sendKeys("Kien.240790");
    // await (await driver.findElement(By.css("input[type = submit]"))).click();
    // await (await driver.findElement(By.id("fbNotificationsJewel"))).click();
    // await driver.findElement(By.css('input[type = email]')).sendKeys("nguyentrongkienit1@gmail.com");
    // console.log ("email success");
    // await driver.findElement(By.className("ZFr60d CeoRYc")).click();
    // await sleep(5000);
    // await driver.quit();
}
example();