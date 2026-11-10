import{test} from'@playwright/test'
import { Login } from '../page/Login'
import { Homepage } from '../page/HomePage'

test('adactin webpage validate', async({page})=>{
    
    const login= new Login(page)
    const Homepage1=new Homepage(page)
    //1.login page
    await login.visiturl()
    await login.uname()
    await login.pwd('Swadhi1997#')
    await login.button();
    //2.Home page
    await Homepage1.location1()
    await Homepage1.hotel1()
    await Homepage1.roomtype1('Deluxe')
    await Homepage1.noofrooms1('6 - Six')
    await Homepage1.chkindate1()
    await Homepage1.chkoutdate1()
    await Homepage1.adultperroom1('3 - Three')
    await Homepage1.childroom1('0 - None')
    await Homepage1.submitbutton1()

    
await page.waitForTimeout(3000)
})