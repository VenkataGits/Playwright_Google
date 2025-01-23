import{test,expect} from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { AboutPage } from '../pages/aboutPage'
import { StorePage } from '../pages/storePage'
import { GmailPage } from '../pages/gmailPage'
import { ImagesPage } from '../pages/imagesPage'
import { SigninPage } from '../pages/signinPage'
import { SearchPage } from '../pages/searchPage'

test.beforeEach(async ({page})=>{
    await page.goto('https://www.google.com')
});

test.afterEach(async ({page})=>{
    await page.close()
});

test("About link Validation", async ({page})=>{
    const homePage = new HomePage(page)
    const aboutPage = new AboutPage(page)

    await homePage.clickAboutLink()
    await aboutPage.verifyAboutHeader()
})

test("Store link Validation", async ({page})=>{
    const homePage = new HomePage(page)
    const storePage = new StorePage(page)

    await homePage.clickStoreLink()
    await storePage.verifyBrowsePhonesButton()
})

test("Gmail link Validation", async ({page})=>{
    const homePage = new HomePage(page)
    const gmailPage = new GmailPage(page)

    await homePage.clickGmailLink()
    await gmailPage.verifyCreateAccountButton()
})

test("Images link Validation", async ({page})=>{
    const homePage = new HomePage(page)
    const imagesPage = new ImagesPage(page)

    await homePage.clickImagesLink()
    await imagesPage.verifyGoogleImagesLogo()
})

test("Sign In button Validation", async ({page})=>{
    const homePage = new HomePage(page)
    const signinPage = new SigninPage(page) 

    await homePage.clickSignInButton()
    await signinPage.verifySigninImage()

})

test("Search box Validation", async ({page})=>{
    const homePage = new HomePage(page)
    await homePage.fillSearchBoxInput("playwright")
    await homePage.selectOption("playwright automation")

    const searchPage = new SearchPage(page)
    await searchPage.verifySearchBoxText("playwright automation")

})

