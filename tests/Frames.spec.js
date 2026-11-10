import{test} from '@playwright/test'
test('Frame Handling', async({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html");

    //1.singleframe
    //const singleframe= await page.frameLocator('//iframe[@id="singleframe"]');
    //await singleframe.locator('//input[@type="text"]').fill("Swadhi");

    //2.multiple frame

    const multiframe= await page.locator('(//a[@class="analystic"])[2]').click();
    const outerframe=await page.frameLocator('//iframe[@src="MultipleFrames.html"]');
    const innerframe=outerframe.frameLocator('(//div[@class="col-xs-6 col-xs-offset-5"]');
    const outbox=innerframe.locator('//input[@type="text"]');

    await page.waitForTimeout(5000);



    









})