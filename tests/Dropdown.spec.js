import{test} from '@playwright/test'

test("Orenge Hrm" ,async ({page})=>{
     await page.waitForTimeout(2000);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   const username=await page.locator('//input[@placeholder="Username"]');
   username.fill("Admin");
   
   const password= await page.locator('//input[@placeholder="Password"]');
   password.fill('admin123');

   await page.locator('//button[@type="submit"]').click();

   await page.waitForTimeout(3000);






})