import { Builder, By, Key } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
 
  const actions = driver.actions({ async: true });
  try {
    // Go to the web page
    await driver.get("https://duckduckgo.com");
 
    // Give the page a second to load
    await driver.sleep(1000);
 
    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);
 
    // Get a reference to the search bar
    const searchbar = await driver.findElement(By.id("searchbox_input"));
    await actions
      .click(searchbar)
      .sendKeys("hello ")
      .keyDown(Key.SHIFT)
      .sendKeys("hello")
      .keyUp(Key.SHIFT)
      .perform();
  } finally {
    // await driver.quit();
  }
})();