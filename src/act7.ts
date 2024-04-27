// //npm exec ts-node src/actions.ts

// import { Builder, By, Key } from "selenium-webdriver";

// (async function (): Promise<void> {
//   const driver = await new Builder().forBrowser("firefox").build();
//   const actions = driver.actions({ async: true });

//   await driver.get("https://training-support.net/selenium/Sliders");
//   await driver.sleep(1000);

//   console.log(await driver.getTitle());

//   const slider = await driver.findElement(By.id("volume"));

//   //actions.mouse().

//   await actions.move({ origin: slider }).press().perform();  

//   const to75 = await driver.findElement(By.xpath("//option[@value='75']"));

//   await actions.move({origin: to75}).press().perform();  

//   //await actions.move({x: 8, y: 0}).perform();

//   // driver.quit();
// })();


//Solution
import { Builder, By } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });
  try {
    // Go to the web page
    await driver.get("https://training-support.net/selenium/Sliders");
 
    // Give the page a second to load
    await driver.sleep(1000);
 
    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);
 
    // Drag to 75%
    await dragSliderByPercentage(25);
 
    // Drag to 0%
    await dragSliderByPercentage(-50);
 
    // Drag to 100%
    await dragSliderByPercentage(50);
 
    // Drag to 50%
    await dragSliderByPercentage(0);
 
   
  } finally {
    await driver.quit();
  }
 
  async function dragSliderByPercentage(percentage: number): Promise<void> {
    const slider = await driver.findElement(By.id("volume"));
    const sliderRect = await slider.getRect();
    const { width } = sliderRect;
 
    const xOffset = Math.floor(width * (percentage / 100));
 
    await driver.sleep(1000);
    await actions.clear();
    await actions.dragAndDrop(slider, { x: xOffset, y: 0 }).perform();
  }
 
})();