// started at 6:23
//npm exec ts-node src/actions.ts

import { Builder, By, Key } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });

  await driver.get("https://training-support.net/selenium/KeyboardEvents");
  await driver.sleep(1000);

  console.log(await driver.getTitle());

  const cursor = await driver.findElement(By.xpath("//span[text()='|']"));

  await actions
    .click(cursor)
    .sendKeys("helpusobi1")
    .keyDown(Key.CONTROL)
    .sendKeys(Key.ENTER)
    .keyUp(Key.CONTROL)
    .perform();

  await driver.sleep(2000);

  console.log(
    await driver.findElement(By.xpath("//p[@id='result']")).getText()
  );

  driver.quit();
})();

// Solution
// import { Builder, By, Key } from "selenium-webdriver";
 
// (async function (): Promise<void> {
//   const driver = await new Builder().forBrowser("firefox").build();
//   const actions = driver.actions({ async: true });
//   try {
//     // Go to the web page
//     await driver.get("https://training-support.net/selenium/KeyboardEvents");
 
//     // Give the page a second to load
//     await driver.sleep(1000);
 
//     // Print the title of the page
//     console.log(`The title of the page is: ${await driver.getTitle()}`);
 
//     // Type the code and hit Ctrl-A
//     await actions
//       .sendKeys("helpusobi1")
//       .keyDown(Key.CONTROL)
//       .sendKeys(Key.ENTER)
//       .keyUp(Key.CONTROL)
//       .perform();
 
//     // Print the secret text
//     const result = await driver.findElement(By.id("result")).getText();
//     console.log(`The secret text is: ${result}`);
//   } finally {
//     await driver.quit();
//   }
// })();
 