import {expect} from '@playwright/test'

export class AboutPage{

    constructor(page){
        this.page = page
        this.aboutHeader = page.getByRole('heading', { name: 'Our mission is to organize' })
    }

    async verifyAboutHeader(){
        await expect(this.aboutHeader).toContainText('Our mission is to organize the world’s information and make it universally accessible and useful.')
    }

}