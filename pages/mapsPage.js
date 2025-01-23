import {expect} from '@playwright/test'

export class MapsPage{

    constructor(page){
        this.page = page
        this.searchMapsInput = page.locator("//input[@role='combobox']")
    }
 
    async verifySearchMapsInput(){
        await expect(this.searchMapsInput).toBeVisible()
    }

}
