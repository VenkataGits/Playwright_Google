import {expect} from '@playwright/test'

export class GmailPage{

    constructor(page){
        this.page = page
        this.createAccountButton = page.getByLabel('Create an account').nth(3)
    }

    async verifyCreateAccountButton(){
        await expect(this.createAccountButton).toBeVisible()
    }

}