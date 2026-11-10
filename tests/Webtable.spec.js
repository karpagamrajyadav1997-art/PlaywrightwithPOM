import{test} from '@playwright/test'
test("Window Handling",async ({page})=>{
    await page.goto("https://assertqa.com/practice/webtables");

    //1.total body
    const dbody=await page.locator('//table[@id="employees-table"]').allTextContents();
    //console.log(dbody);
    //2.head
    const head= await page.locator('//table[@id="employees-table"]//thead').allTextContents();
    //console.log(head);
    //3.body
    const body= await page.locator('//table[@id="employees-table"]//tbody').allInnerTexts();
    console.log(body);




})