import {test} from '@playwright/test'

test("Registerpage handling",async({page})=>{

    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.waitForTimeout(3000);

    const fname= await page.locator('//input[@placeholder="First Name"]');
    await fname.fill('Karpagam');
    const lname = await page.locator('//input[@placeholder="Last Name"]');
    await lname.fill('B');
    const address= await page.locator('//textarea[@rows="3"]');
    await address.fill("2/19 subbarayan nagar,thuraipakkam.");
    const email= await page.locator('//input[@type="email"]');
    await email.fill('Karpagamrajyadav1997@gmail.com');
    const phone=await page.locator('//input[@type="tel"]');
    phone.fill("7558152820");
    const gender= await page.locator('//input[@value="FeMale"]').click();
    const hobbies= await page.locator('//input[@id="checkbox1"]').click();
    const language=await page.locator("//div[contains(@class,'ui-autocomplete-multiselect')]").click();
    const lang1=await page.locator("//a[text()='Arabic']").click();
    const lang2=await page.locator("//a[text()='Bulgarian']").click();
    const lag3= await page.locator('//a[text()="Catalan"]').click();
    const outerclick=await page.locator('//label[text()="Languages"]').click();
    const skills=await page.locator('//select[@id="Skills"]');
    skills.selectOption("AutoCAD");

    const country= await page.locator('//select[@id="countries"]').click();
    //country.selectOption("Select Country");

    const country1= await page.locator('//span[@role="combobox"]').click();
    const countryinput= await page.locator('//input[@role="textbox"]').fill("India");
    const indiaselect=await page.locator('//span[text()="India"]');
    await page.keyboard.press('Enter');
    const dob=await page.locator('//select[@id="yearbox"]');
    dob.selectOption("1997");
    const dobmonth= await page.locator('//select[@placeholder="Month"]');
    dobmonth.selectOption("October");
    const fstpassword= await page.locator('//input[@id="firstpassword"]').fill("7558152820");
    
    const secondpassword= await page.locator('//input[@id="secondpassword"]');
    secondpassword.fill('7558152820');
    const submitbutton=await page.locator('//button[@id="Button1"]').click();



    
  await page.waitForTimeout(3000);

})