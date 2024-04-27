import { Builder, By } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });
  try {
    // Go to the web page
    await driver.get("https://training-support.net/selenium/DynamicAttributes");
 
    // Give the page a second to load
    await driver.sleep(1000);
 
    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);
 
   
    await driver.findElement(By.xpath("//input[starts-with(@id,'full-name')]")).sendKeys("Akshay");
    
    await driver.findElement(By.xpath("//input[ends-with(@id,'email')]")).sendKeys("akshay@google.com");

    await driver.findElement(By.xpath("//input[contains(@name,'event-date')]")).sendKeys("2024-04-24");

    await driver.findElement(By.xpath("//textarea[contains(@name,'additional-details')]]")).sendKeys("Details");

    await driver.findElement(By.xpath("//button[text()='Submit']")).click();
   
    await driver.sleep(1000);

    await driver.navigate().refresh();

    await driver.sleep(1000);

    await driver.findElement(By.xpath("//input[starts-with(@id,'full-name')]")).sendKeys("Akshay");
    
    await driver.findElement(By.xpath("//input[ends-with(@id,'email')]")).sendKeys("akshay@google.com");

    await driver.findElement(By.xpath("//input[contains(@name,'event-date')]")).sendKeys("2024-04-24");

    await driver.findElement(By.xpath("//textarea[contains(@name,'additional-details')]]")).sendKeys("Details");

    await driver.findElement(By.xpath("//button[text()='Submit']")).click();
   
    await driver.sleep(1000);



  } finally {
    await driver.quit();
  }
 
 
 
})();

// Solution
// import { Builder, By } from "selenium-webdriver";
 
// (async function (): Promise<void> {
//   const driver = await new Builder().forBrowser("firefox").build();
 
//   try {
//     // Go to the web page
//     await driver.get("https://training-support.net/selenium/DynamicAttributes");
 
//     // Give the page a second to load
//     await driver.sleep(1000);
 
//     // Print the title of the page
//     console.log(`The title of the page is: ${await driver.getTitle()}`);
 
//     // Fill the form and submit
//     const fillFormAndSubmit = async () => {
//       await driver.findElement(By.css("input[id^='full-name']")).sendKeys("Abhiram");
//       await driver.findElement(By.css("input[id$='email']")).sendKeys("abhiram@cklabs.com");
//       await driver.findElement(By.xpath("//input[contains(@name, 'event-date')]")).sendKeys("2024-12-25");
//       await driver.findElement(By.xpath("//textarea[contains(@id, 'additional-details')]")).sendKeys("PARTY!!!");
//       await driver.findElement(By.css("button.font-bold")).click();
//     }
 
//     await fillFormAndSubmit();
 
//     let result = await driver.findElement(By.id("action-confirmation")).getText();
//     console.log(`Result of first submission: ${result}`);
 
//     await driver.sleep(1000);
//     await driver.navigate().refresh();
//     await driver.sleep(2000);
//     await fillFormAndSubmit();
 
//     result = await driver.findElement(By.id("action-confirmation")).getText();
//     console.log(`Result of second submission: ${result}`);
 
//   } finally {
//     await driver.quit();
//   }
 
// })();