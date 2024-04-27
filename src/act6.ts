//npm exec ts-node src/actions.ts

import { Builder, By, Key } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });

  await driver.get("https://training-support.net/selenium/DragDrop");
  await driver.sleep(1000);

  console.log(await driver.getTitle());

  const ball = await driver.findElement(By.id("ball"));
  const dropzone = await driver.findElement(By.id("dropzone1"));

  actions.dragAndDrop(ball, dropzone).perform();
  
  await driver.sleep(2000);

  console.log(
    await driver
      .findElement(By.xpath("//span[@class='dropzone-text svelte-lit24y']"))
      .getText()
  );

  const dropzone2 = await driver.findElement(By.id("dropzone2"));

  actions.dragAndDrop(ball, dropzone2).perform();
  
  await driver.sleep(2000);

  console.log(
    await driver
      .findElement(By.xpath("(//span[@class='dropzone-text svelte-lit24y'])[2]"))
      .getText()
  );

  driver.quit();
})();


// Solution 6
// import { Builder, By, until } from "selenium-webdriver";
 
// (async function (): Promise<void> {
//   const driver = await new Builder().forBrowser("firefox").build();
//   const actions = driver.actions({ async: true });
//   try {
//     // Go to the web page
//     await driver.get("https://training-support.net/selenium/DragDrop");
 
//     // Give the page a second to load
//     await driver.sleep(1000);
 
//     // Print the title of the page
//     console.log(`The title of the page is: ${await driver.getTitle()}`);
 
//     // Get references to all the elements
//     const ball = await driver.findElement(By.id("ball"));
//     const dropzone1 = await driver.findElement(By.id("dropzone1"));
//     const dropzone2 = await driver.findElement(By.id("dropzone2"));
 
//     // Drag the ball into dropzone1
//     await actions.dragAndDrop(ball, dropzone1).perform();
 
//     // Verify if dropzone1 was activated
//     let dropzoneText = await dropzone1.findElement(By.css("span"));
//     await driver.wait(until.elementTextContains(dropzoneText, "Dropped!"));
//     if((await dropzoneText.getText()) === "Dropped!") {
//       console.log("Dropzone1 was activated!");
//     }
 
//     // Drag the ball into dropzone2
//     await actions.dragAndDrop(ball, dropzone2).perform();
 
//     // Verify if dropzone2 was activated
//     dropzoneText = await dropzone2.findElement(By.css("span"));
//     await driver.wait(until.elementTextContains(dropzoneText, "Dropped!"));
//     if((await dropzoneText.getText()) === "Dropped!") {
//       console.log("Dropzone2 was activated!");
//     }
   
//   } finally {
//     await driver.quit();
//   }
// })();


// With screenshot
// import { Builder, By, until } from "selenium-webdriver";
// import fs from "node:fs/promises";
 
// (async function (): Promise<void> {
//   const driver = await new Builder().forBrowser("firefox").build();
//   const actions = driver.actions({ async: true });
//   try {
//     // Go to the web page
//     await driver.get("https://training-support.net/selenium/DragDrop");
 
//     // Give the page a second to load
//     await driver.sleep(1000);
 
//     // Print the title of the page
//     console.log(`The title of the page is: ${await driver.getTitle()}`);
 
//     // Get references to all the elements
//     const ball = await driver.findElement(By.id("ball"));
//     const dropzone1 = await driver.findElement(By.id("dropzone1"));
//     const dropzone2 = await driver.findElement(By.id("dropzone2"));
 
//     // Drag the ball into dropzone1
//     await actions.dragAndDrop(ball, dropzone1).perform();
 
//     // Verify if dropzone1 was activated
//     let dropzoneText = await dropzone1.findElement(By.css("span"));
//     await driver.wait(until.elementTextContains(dropzoneText, "Dropped!"));
//     if ((await dropzoneText.getText()) === "Dropped!") {
//       console.log("Dropzone1 was activated!");
//     }
 
//     const screenshot1 = await driver.takeScreenshot();
//     await fs.writeFile("./screenshot1.png", screenshot1, "base64");
 
//     // Drag the ball into dropzone2
//     await actions.dragAndDrop(ball, dropzone2).perform();
 
//     // Verify if dropzone2 was activated
//     dropzoneText = await dropzone2.findElement(By.css("span"));
//     await driver.wait(until.elementTextContains(dropzoneText, "Dropped!"));
//     if ((await dropzoneText.getText()) === "Dropped!") {
//       console.log("Dropzone2 was activated!");
//     }
//     const screenshot2 = await driver.takeScreenshot();
//     await fs.writeFile("./screenshot2.png", screenshot2, "base64");
//   } finally {
//     await driver.quit();
//   }
// })();