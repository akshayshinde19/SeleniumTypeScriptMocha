
import { Builder, By } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
 
  try {
    // Go to the web page
    await driver.get("https://training-support.net/selenium/Tabs");
 
    // Give the page a second to load
    await driver.sleep(1000);
 
    // Print the original tab's handle
    const originalHandle = await driver.getWindowHandle();
    console.log(`The original tab's handle is: ${originalHandle}`);
 
    // Print the title of the page
    console.log(
      `The title of the original page is: ${await driver.getTitle()}`,
    );
 
    // Print the currently available tabs
    console.log(
      `Selenium is currently handling the following tabs: ${await driver.getAllWindowHandles()}`,
    );
 
    // Click the button to spawn a new tab
    await driver
      .findElement(By.xpath("//button[text()='Open A New Tab']"))
      .click();
 
    // Wait for the new tab to actually open
    await driver.wait(
      async () => (await driver.getAllWindowHandles()).length === 2,
      10000,
    );
 
    // Print the currently available tabs
    const handles = await driver.getAllWindowHandles();
    console.log(
      `After clicking the button, we have the following tabs: ${handles}`,
    );
 
    // Switch to the new tab
    await driver.switchTo().window(handles[1]);
 
    // Print the current tab's handle
    console.log(
      `After switching, the current tab's handle is: ${await driver.getWindowHandle()}`,
    );
 
    // Wait for some content to load
    await driver.sleep(1000);
 
    // Print that text
    console.log(
      `The code is: ${await driver.findElement(By.css("h2")).getText()}`,
    );
  } finally {
    await driver.quit();
  }
})();
 