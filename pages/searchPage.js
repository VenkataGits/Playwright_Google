import {expect} from '@playwright/test'

export class SearchPage{

    constructor(page){
        this.page = page
        this.searchBox = page.getByRole('combobox', { name: 'Search' })
    }

    async verifySearchBoxText(text){
        const searchText = await this.searchBox.inputValue()
        expect.soft(searchText).toEqual(text)
    }

}