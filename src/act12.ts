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

    await driver.findElement(By.xpath("//button[text()='Add Row +']")).click();
    await driver.findElement(By.xpath("(//tbody/tr)[10]/td[1]")).clear();
    await driver.findElement(By.xpath("(//tbody/tr)[10]/td[1]")).sendKeys(10);

    await driver.findElement(By.xpath("(//tbody/tr)[10]/td[2]")).clear();
    await driver.findElement(By.xpath("(//tbody/tr)[10]/td[2]")).sendKeys("The Lighteining Thief");

    await driver.findElement(By.xpath("(//tbody/tr)[10]/td[3]")).clear();
    await driver.findElement(By.xpath("(//tbody/tr)[10]/td[3]")).sendKeys("Rick Riordan");

    await driver.findElement(By.xpath("(//tbody/tr)[10]/td[4]")).clear();
    await driver.findElement(By.xpath("(//tbody/tr)[10]/td[4]")).sendKeys("04564648545");

    await driver.findElement(By.xpath("(//tbody/tr)[10]/td[5]")).clear();
    await driver.findElement(By.xpath("(//tbody/tr)[10]/td[5]")).sendKeys("$8.01");


    await driver.findElement(By.xpath("//table/thead/tr/th[4]")).click();

    console.log(`Value from 4th row  and 2nd Col is ${(await driver.findElement(By.xpath("(//tbody/tr)[4]/td[2]")).getText())}`);

    await driver.sleep(2000);
   
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
//     await driver.get("https://training-support.net/selenium/Tables");
 
//     // Give the page a second to load
//     await driver.sleep(1000);
 
//     // Print the title of the page
//     console.log(`The title of the page is: ${await driver.getTitle()}`);
 
//     // Add a new row
//     await driver.findElement(By.css("button.rounded-lg")).click();
 
//     // Get the cells of the new row
//     const lastRowCells = await driver.findElements(By.xpath("//table/tbody/tr[last()]/td"));
 
//     // Represent the data to be inserted as an array
//     const rowData = [
//       "10",
//       "The Lightning Thief",
//       "Rick Riordan",
//       "0786838655",
//       "$8.01"
//     ];
 
//     // Insert the data
//     for (const [i, cell] of lastRowCells.entries()) {
//       await driver.sleep(1500);
//       await cell.clear();
//       await cell.sendKeys(rowData[i]);
//     }
 
//     // Click on the ASIN header
//     await driver.findElement(By.xpath("//th[text()='ASIN']")).click();
//     await driver.sleep(1500);
 
//     // Get the value at the 4th row 2nd column
//     const cell4_2 = await driver.findElement(By.xpath("//table/tbody/tr[4]/td[2]")).getText();
//     console.log(`The value at 4,2 is: ${cell4_2}`);
 
//   } finally {
//     await driver.quit();
//   }
 
// })();
 