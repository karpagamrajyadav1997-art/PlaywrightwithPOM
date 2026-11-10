import {test} from '@playwright/test'

test("Alert Handling",async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Alerts.html");

    //simpleAlertHandling
    
    page.once("dialog", async(SimpleAlertHandling)=>{

        console.log("Simple Alert Handling Message :" , SimpleAlertHandling.message());
        await SimpleAlertHandling.accept();
})

await page.locator('//button[@onclick="alertbox()"]').click();

//2.Alert with ok or cancel

const alertwithok=await page.locator('//a[text()="Alert with OK & Cancel "]').click();

page.once("dialog",async (Alertwithokorcancel)=>{

    console.log(" Alert with ok or cancel :" , Alertwithokorcancel.message());
    await Alertwithokorcancel.accept();
})


await page.locator('//button[@onclick="confirmbox()"]').click();

//3.Alert with text box
const Alertwithtext= await page.locator('(//a[@class="analystic"])[3]').click();

page.once("dialog", async(PromptAlert)=>{

console.log("Prompt alert:" ,PromptAlert.message());
await PromptAlert.accept("Swadhi");
})

await page.locator('//button[@onclick="promptbox()"]').click();



await page.waitForTimeout(5000);










} )