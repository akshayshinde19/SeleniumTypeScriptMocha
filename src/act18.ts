import { Builder, By } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();

  try {
    // Go to the web page
    await driver.get("https://training-support.net/selenium/Tabs");

    // Give the page a second to load
    await driver.sleep(1000);

    let numberOfTabs = 1;
    let code = "";

    // Print the original tab's handle
    const originalHandle = await driver.getWindowHandle();
    console.log(`The original tab's handle is: ${originalHandle}`);

    // Print the title of the page
    console.log(
      `The title of the original page is: ${await driver.getTitle()}`
    );

    do {
      // Print the currently available tabs
      console.log(
        `Selenium is currently handling the following tabs: ${await driver.getAllWindowHandles()}`
      );

      // Click the button to spawn a new tab
      await driver
        .findElement(By.xpath("//button[contains(., 'Open')]"))
        .click();

        numberOfTabs+=1;

      // Wait for the new tab to actually open
      await driver.wait(
        async () => (await driver.getAllWindowHandles()).length > 1,
        10000
      );

      // Print the currently available tabs
      const handles = await driver.getAllWindowHandles();
      console.log(
        `After clicking the button, we have the following tabs: ${handles}`
      );

      // Switch to the new tab
      await driver.switchTo().window(handles[numberOfTabs-1]);

      // Print the current tab's handle
      console.log(
        `After switching, the current tab's handle is: ${await driver.getWindowHandle()}`
      );

      // Wait for some content to load
      await driver.sleep(2000);

      code =await driver.findElement(By.xpath("//span[@class='font-bold']")).getText();

      // Print that text
      console.log(
        `The code is: ${code}`
      );


    } while (!code.includes("incentive"));

    console.log(`No of tabs opened =${numberOfTabs}`);
        
        
  } finally {
    await driver.quit();
  }
})();

//Solution

// import { Builder, By } from "selenium-webdriver";
 
// (async function (): Promise<void> {
//   const driver = await new Builder().forBrowser("firefox").build();
 
//   try {
//     // Go to the web page
//     await driver.get("https://training-support.net/selenium/Tabs");
 
//     // Give the page a second to load
//     await driver.sleep(1000);
 
//     // Print the title of the page
//     console.log(`The title of the page is: ${await driver.getTitle()}`);
 
//     // Store the original tab's handle
//     const originalTab = await driver.getWindowHandle();
 
//     // Initialize the count
//     let count = 0;
 
//     for (;;) {
//       // Switch to the original tab
//       await driver.switchTo().window(originalTab);
 
//       // Click the button to open a new tab
//       await driver
//         .findElement(By.xpath("//button[text()='Open A New Tab']"))
//         .click();
 
//       // Wait for the second tab to open
//       await driver.wait(
//         async () => (await driver.getAllWindowHandles()).length === 2,
//         5000,
//       );
 
//       // Switch to the new tab
//       const handles = await driver.getAllWindowHandles();
//       await driver.switchTo().window(handles[1]);
 
//       // Wait for the code to load
//       await driver.sleep(700);
//       const code = await driver.findElement(By.xpath("//h2/span")).getText();
 
//       if (code === "incentive") {
//         console.log("Incentive detected.");
//         console.log(`It took ${count} tabs to get here.`);
//         break;
//       } else {
//         console.log("Incentive not found... Retrying...");
//         count++;
//         await driver.close();
//       }
//     }
//   } finally {
//     await driver.quit();
//   }
// })();