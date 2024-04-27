// started at 6:23
//npm exec ts-node src/actions.ts

import { Builder, By } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });

  await driver.get("https://www.training-support.net/selenium/MouseEvents");
  await driver.sleep(1000);

  console.log(await driver.getTitle());

  await driver.findElement(By.xpath("//h1[text()='Cargo.toml']")).click();
  await driver.sleep(1000);

  console.log(await (driver.findElement(By.xpath("//p[@id='result']"))).getText());

 

  const srcButton= await driver.findElement(By.xpath("//h1[text()='src']"));
  await actions.clear();
  await actions.contextClick(srcButton).perform();
  await driver.findElement(By.xpath("//span[text()='Rename']")).click();
  await driver.sleep(500);
  console.log(await (driver.findElement(By.xpath("//p[@id='result']"))).getText());

  await driver.sleep(500);

  await actions.contextClick(srcButton).perform();
  await driver.findElement(By.xpath("//span[text()='Open']")).click();
  await driver.sleep(500);
  console.log(await (driver.findElement(By.xpath("//p[@id='result']"))).getText());

  await driver.sleep(500);

  const targetButton= await driver.findElement(By.xpath("//h1[text()='target']"));

  await actions.doubleClick(targetButton).perform();
  await driver.sleep(500);
  console.log(await (driver.findElement(By.xpath("//p[@id='result']"))).getText());


  driver.quit();
})();


// Solution
// import { Builder, By, until } from "selenium-webdriver";
 
// (async function (): Promise<void> {
//   const driver = await new Builder().forBrowser("firefox").build();
//   const actions = driver.actions({async: true});
//   try {
//     // Go to the web page
//     await driver.get("https://training-support.net/selenium/MouseEvents");
 
//     // Give the page a second to load
//     await driver.sleep(1000);
 
//     // Print the title of the page
//     console.log(`The title of the page is: ${await driver.getTitle()}`);
 
//     // Click the Cargo.toml file and print the message that appears
//     await driver.sleep(2000);
//     const cargo_toml = await driver.findElement(By.css("div.file:nth-child(2)"));
//     await actions.clear();
//     await actions.click(cargo_toml).perform();
//     const result_text = async () => await driver.findElement(By.id("result")).getText();
//     console.log(`On clicking Cargo.toml: ${await result_text()}`);
 
//     // Right click the src folder, click on rename, and print the message
//     await driver.sleep(2000);
//     const src = await driver.findElement(By.css("div.file:nth-child(3)"));
//     await actions.clear();
//     await actions.contextClick(src).perform();
//     await driver.wait(until.elementLocated(By.css("li.w-full:nth-child(4)")));
//     await driver.findElement(By.css("li.w-full:nth-child(4)")).click();
//     console.log(`On trying to rename src: ${await result_text()}`);
 
//     // Right click the src folder, click on open, and print the message
//     await driver.sleep(2000);
//     await actions.clear();
//     await actions.contextClick(src).perform();
//     await driver.wait(until.elementLocated(By.css("li.w-full:nth-child(1)")));
//     await driver.findElement(By.css("li.w-full:nth-child(1)")).click();
//     console.log(`On trying to open src: ${await result_text()}`);
 
//     // Double click the targer file and print the message that appears
//     await driver.sleep(2000);
//     const target = await driver.findElement(By.css("div.file:nth-child(4)"));
//     await actions.clear();
//     await actions.doubleClick(target).perform();
//     console.log(`On double clicking target: ${await result_text()}`);
//     await driver.sleep(2000);
//   } finally {
//     await driver.quit();
//   }
// })();