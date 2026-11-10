export class Homepage{

    constructor(page){

        this.page=page;
        this.location=page.locator('//select[@id="location"]')
        this.hotel=page.locator('//select[@id="hotels"]')
        this.roomtype=page.locator('//select[@id="room_type"]')
        this.noofrooms=page.locator('//select[@id="room_nos"]')
        this.chkindate=page.locator('//input[@id="datepick_in"]')
        this.chkoutdate=page.locator('//input[@id="datepick_out"]')
        this.adultperroom=page.locator('//select[@id="adult_room"]')
        this.childroom=page.locator('//select[@id="child_room"]')
        this.submitbutton=page.locator('//input[@id="Submit"]')
}

    async location1(){
        await this.location.selectOption('Melbourne')
    }
    async hotel1(){
        await this.hotel.selectOption('Hotel Sunshine')
    }
    async roomtype1(type){
        await this.roomtype.selectOption(type)
    }
    async noofrooms1(no){
        await this.noofrooms.selectOption(no)
    }
    async chkindate1(){
        await this.chkindate.fill('30/10/2026')
    }
    async chkoutdate1(){
        await this.chkoutdate.fill('2/11/2026')
    }
    async adultperroom1(adultnos){
        await this.adultperroom.selectOption(adultnos)
    }
    async childroom1(childnos){
        await this.childroom.selectOption(childnos)
    }
    async submitbutton1(){
        await this.submitbutton.click()
    }

    


}