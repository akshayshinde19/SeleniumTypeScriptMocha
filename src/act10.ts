import { Builder, By } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
  
  try {
    // Go to the web page
    await driver.get("https://training-support.net/selenium/Tables");
 
    // Give the page a second to load
    await driver.sleep(1000);

    console.log(await driver.getTitle());

    const cols = await driver.findElements(By.xpath("//thead/tr/th"));
    const rows = await driver.findElements(By.xpath("//tbody/tr"));

    console.log(`No of rows=${rows.length} and No of colmns=${cols.length}`);

    console.log(`Text from 5th row is ${(await driver.findElement(By.xpath("(//tbody/tr)[5]")).getText())}`);

    console.log(`Value from 6th row  and 2nd Col is ${(await driver.findElement(By.xpath("(//tbody/tr)[6]/td[2]")).getText())}`);


 
   
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
//     await driver.get("https://training-support.net/selenium/Tables");
 
//     // Give the page a second to load
//     await driver.sleep(1000);
 
//     // Print the title of the page
//     console.log(`The title of the page is: ${await driver.getTitle()}`);
 
//     // Print the dimensions of the table
//     const cols = await driver.findElements(By.xpath("//table/thead/tr[1]/th"));
//     const rows = await driver.findElements(By.xpath("//table/tbody/tr"));
//     console.log(`The dimensions of the table are: ${rows.length}x${cols.length}`);
 
//     // Print the cells of the 5th row
//     const fifthRow = await driver.findElements(By.xpath("//table/tbody/tr[5]/td"));
//     console.log("The cells of the 5th row are:");
//     for (const cell of fifthRow) {
//       console.log(await cell.getText());
//     }
 
//     // Print the value at (6,2)
//     const cell_6_2 = await driver.findElement(By.xpath("//table/tbody/tr[6]/td[2]")).getText();
//     console.log(`The value of 6,2 is: ${cell_6_2}`);
   
//   } finally {
//     await driver.quit();
//   }
 
// })();
 