import { Builder, WebDriver, By } from "selenium-webdriver";


(async function(): Promise<void> {
    const driver = await new Builder().forBrowser("chrome").build();    

    await driver.get("https://training-support.net");
    await driver.sleep(1000);
    console.log(await driver.getTitle());

    await driver.findElement(By.linkText("About Us")).click();
    await driver.sleep(1000);
    
    console.log(await driver.getTitle());

    await driver.quit();
    
})();