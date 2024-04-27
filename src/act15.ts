import { Builder, By, Key } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });
  try {
    // Go to the web page
    await driver.get("https://training-support.net/selenium/Selects");
 
    // Give the page a second to load
    await driver.sleep(1000);
 
    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);
 
    await driver.findElement(By.xpath("//select[@multiple]/option[text()='TailwindCSS']")).click();

    await actions
      .keyDown(Key.CONTROL).keyDown


    
   
  } finally {
    await driver.quit();
  }
 

 
})();

//solution
// import { Builder, By, Key } from "selenium-webdriver";
 
// (async function (): Promise<void> {
//   const driver = await new Builder().forBrowser("firefox").build();
 
//   const actions = driver.actions({ async: true });
 
//   try {
//     // Go to the web page
//     await driver.get("https://training-support.net/selenium/Selects");
 
//     // Give the page a second to load
//     await driver.sleep(1000);
 
//     // Print the title of the page
//     console.log(`The title of the page is: ${await driver.getTitle()}`);
 
//     // Store a partial of the Select's Xpath
//     const select_root = "//select[contains(@class, 'h-80')]";
 
//     // Select the TailwindCSS using visible text
//     await driver
//       .findElement(By.xpath(`${select_root}/option[text()='TailwindCSS']`))
//       .click();
 
//     // Hold down the control key
//     await actions.keyDown(Key.CONTROL).perform();
 
//     // Select the 6th - 9th options using their index
//     const options = await driver.findElements(
//       By.xpath(`${select_root}/option`)
//     );
//     await actions.clear();
//     await actions.dragAndDrop(options[5], options[8]).perform();
 
//     // Select the Rust option using it's value
//     await driver
//       .findElement(By.xpath(`${select_root}/option[@value='rust']`))
//       .click();
 
//     // Deselect the 6th option
//     await options[5].click();
 
//     // Raise the control key
//     await actions.clear();
//     await actions.keyUp(Key.CONTROL).perform();
//   } finally {
//     await driver.quit();
//   }
// })();