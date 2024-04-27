import { Builder, WebDriver } from "selenium-webdriver";


(async function(): Promise<void> {
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();    

    await driver.get("https://training-support.net");


    console.log(await driver.getTitle());

    await driver.quit();
    
})();