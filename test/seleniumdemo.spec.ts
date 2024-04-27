import assert from "assert";
import { Builder, By, WebDriver } from "selenium-webdriver";
 
describe("Selenium Activity 1", function () {
  this.timeout(120000);
 
  let driver: WebDriver;
 
  before("WebDriver Setup", async function () {
    driver = await new Builder().forBrowser("firefox").build();
  });
 
  it("should open https://training-support.net", async function () {
    await driver.get("https://training-support.net");
    await driver.sleep(1000);
    assert.equal(await driver.getTitle(), "Training Support");
  });
 
  it("should find the About Us button", async function () {
    const button = await driver.findElement(By.linkText("About Us"));
    assert.ok(button);
  });
 
  it("should take us to the About page when clicked", async function () {
    const button = await driver.findElement(By.linkText("About Us"));
    await button.click();
    await driver.sleep(1000);
    assert.equal(await driver.getTitle(), "About Training Support");
  });
 
  after("WebDriver Teardown", async function () {
    await driver.quit();
  });
});