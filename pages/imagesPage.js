import {expect} from '@playwright/test'

export class ImagesPage{

    constructor(page){
        this.page = page
        this.googleImagesLogo = page.getByRole('img', { name: 'Google Images' })
    }
 
    async verifyGoogleImagesLogo(){
        await expect(this.googleImagesLogo).toBeVisible()
    }

}