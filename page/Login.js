export class Login{

    constructor(page){

        this.page=page
        this.username=page.locator('//input[@id="username"]');
        this.password=page.locator('//input[@id="password"]');
        this.loginbutton=page.locator('//input[@id="login"]');
    }

    async visiturl(){
        await this.page.goto('https://adactinhotelapp.com/');
    }
    async uname(){
        await this.username.fill('KarpagamBalu');
    }
    async pwd(pwrd){
        await this.password.fill(pwrd);
    }
    async button(){
        await this.loginbutton.click();
    }

    
}