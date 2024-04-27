import { Builder, WebDriver, By } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();

  await driver.get("https://training-support.net/selenium/SimpleForm");
  await driver.sleep(1000);
  // console.log(await driver.getTitle());
  await driver.findElement(By.id("full-name")).sendKeys("Akshay");
  await driver.findElement(By.id("email")).sendKeys("akshay@google.com");
  await driver
    .findElement(By.xpath("//input[@type='date']"))
    .sendKeys("2024-04-23");

  await driver.findElement(By.id("additional-details")).sendKeys("Party!!!");
  await driver.sleep(2000);
  await driver.findElement(By.xpath("//button[text()='Submit']")).submit();

  await driver.sleep(1000);
  console.log(await driver.findElement(By.id("action-confirmation")).getText());

  await driver.quit();
})();
