import {expect} from '@playwright/test'

export class StorePage{

    constructor(page){
        this.page = page
        this.browsePhonesButton = page.getByLabel('Browse through the new Pixel')
    }

    async verifyBrowsePhonesButton(){
        await expect(this.browsePhonesButton).toBeVisible()
    }

}