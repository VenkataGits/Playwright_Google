import {expect} from '@playwright/test'

export class HomePage{

    constructor(page){

        this.page = page;
        this.aboutLink = page.getByRole('link', { name: 'About' })
        this.storeLink = page.getByRole('link', { name: 'Store' })
        this.gmailLink = page.getByLabel('Gmail')
        this.imagesLink = page.getByLabel('Search for Images')
        this.appsMemu = page.getByLabel('Google apps')
        this.signInButton = page.getByLabel('Sign in')
        this.searchBoxInput = page.getByLabel('Search', { exact: true })
        this.googleSearchButton = page.getByRole('button', { name: 'Google Search' })
        this.iAmFeelingLuckyButton = page.getByRole('button', { name: 'I\'m Feeling Lucky' })
        this.appsFrame = page.frameLocator("//iframe[@name='app']")

    }

    async clickAboutLink(){
        await this.aboutLink.click();
    }

    async clickStoreLink(){
        await this.storeLink.click();
    }

    async clickGmailLink(){
        await this.gmailLink.click();
    }

    async clickImagesLink(){
        await this.imagesLink.click();
    }

    async clickAppsMemu(){
        await this.appsMemu.click();
    }

    async selectApp(app){
        const listOfApps = await this.appsFrame.locator("//span[@class='Rq5Gcb']").all()

        for(let i=0; i<listOfApps.length; i++){
            const text = await listOfApps[i].textContent();
            if(text.includes(app)){
                await listOfApps[i].click();
                break;
            }
        }

    }

    async clickSignInButton(){
        await this.signInButton.click();
    }

    async fillSearchBoxInput(input){
        await this.searchBoxInput.fill(input);
    }

    async selectOption(value){
        await this.page.waitForSelector("//li[@role='presentation']")
        const elements = await this.page.$$("//li[@role='presentation']")

        for(let i=0; i<elements.length; i++){
            const text = await elements[i].textContent();
            if(text.includes(value)){
                await elements[i].click();
                break;
            }
        }
    }

    async clickGoogleSearchButton(){
        await this.googleSearchButton.click();
    }

    async clickIAmFeelingLuckyButton(){
        await this.iAmFeelingLuckyButton.click();    
    }


}