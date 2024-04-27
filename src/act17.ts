
import { Builder, By, Key, until } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
 
  const actions = driver.actions({ async: true });
 
  try {
    // Go to the web page
    await driver.get("https://training-support.net/selenium/Alerts");
 
    // Give the page a second to load
    await driver.sleep(1000);
 
    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);
 
    await driver.findElement(By.id("prompt")).click();
    await driver.sleep(1000);

    await driver.wait(until.alertIsPresent());

    let alert = await driver.switchTo().alert();

    await alert.sendKeys("Akshay");
    await driver.sleep(1000);

    await alert.accept();

    console.log(await driver.findElement(By.id("result")).getText());

    await driver.sleep(1000);


  } finally {
    await driver.quit();
  }
})();

// Solution
// import { Builder, By, until } from "selenium-webdriver";
 
// (async function (): Promise<void> {
//   const driver = await new Builder().forBrowser("firefox").build();
 
//   try {
//     // Go to the web page
//     await driver.get("https://training-support.net/selenium/Alerts");
 
//     // Give the page a second to load
//     await driver.sleep(1000);
 
//     // Print the title of the page
//     console.log(`The title of the page is: ${await driver.getTitle()}`);
 
//     // Click on the prompt button
//     await driver.findElement(By.id("prompt")).click();
 
//     // Wait for the alert to show up
//     await driver.wait(until.alertIsPresent());
 
//     // Type my name into the prompt
//     const alert = await driver.switchTo().alert();
//     await alert.sendKeys("Abhiram");
//     await alert.accept();
 
//     // Print the result
//     console.log(await driver.findElement(By.id("result")).getText());
//   } finally {
//     await driver.quit();
//   }
// })();