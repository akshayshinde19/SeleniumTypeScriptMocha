import { Builder, WebDriver, By } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();

  await driver.get("https://training-support.net/selenium/TargetPractice");
  await driver.sleep(1000);
  // console.log(await driver.getTitle());

  console.log(
    await driver.findElement(By.xpath("//button[text()='Cyan']")).getText()
  );
  console.log(
    await driver.findElement(By.xpath("//h1[text()='Heading #6']")).getAttribute("class")
  );

//   let  w=   await driver.findElement(By.xpath("//button[text()='Pink']"))
//   console.log(w.siz);
//     console.log(w.getSize);

await driver.sleep(2000);

  await driver.quit();

})();
