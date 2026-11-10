import {test, expect} from '@playwright/test'

test("website Handling", async({page})=>{
    await page.goto("https://www.flipkart.com/");
   const loginpage= await page.locator('//span[@role="button"]').click();

await page.waitForTimeout(3000);

})