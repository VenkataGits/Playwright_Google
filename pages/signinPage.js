import {expect} from '@playwright/test'

export class SigninPage{

    constructor(page){
        this.page = page
        this.signinText = page.getByText('Sign in', { exact: true })
    }

    async verifySigninImage(){
        await expect(this.signinText).toBeVisible()
    }

}