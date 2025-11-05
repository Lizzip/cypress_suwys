/// <reference types="cypress" />

import homePage from '../pages/home'

describe('Visit the Home Page with the cookie set', () => {

    beforeEach(() => {
        homePage.visit()
    })

    it('should display the "Make your own unique botanical posters" text', () => {
        homePage.getPageText().should('contain.text', 'Make your own unique botanical posters')
    })

    it('should display the newsletter signup', () => {
        homePage.getNewsletterEmail().should('exist')
        homePage.getNewsletterSignupButton().should('exist')

        //TODO: Check the functionality of the signup - currently unable due to developer request
    })

    it('should display the button and links to the designer', () => {
        homePage.getDesignerButton().should('exist')
        homePage.getDesignerLinkHeader().should('exist')
        homePage.getDesignerLinkFooter().should('exist')
    })

    it('should display the links to the gallery', () => {
        homePage.getGalleryLinkHeader().should('exist')
        homePage.getGalleryLinkFooter().should('exist')
    })

    it('should display the link to the shopping cart', () => {
        homePage.getShoppingCart().should('exist')
    })

    it('should display the links to the pricing page', () => {
        homePage.getPricingLinkFooter().should('exist')
        homePage.getAboutPricingLinkFooter().should('exist')
    })

    it('should show the about, privacy, and contact links in the page footer', () => {
        homePage.getContactLink().should('exist')
        homePage.getAboutLink().should('exist')
        homePage.getPrivacyLink().should('exist')
    })

    it('should display the sample gallery list', () => {
        homePage.getSampleGalleryList().should('exist')
        homePage.getSampleGalleryListItem(1).should('contain.text', 'Be hyperlocal')
        homePage.getSampleGalleryListItem(2).should('contain.text', 'Show off your favourite animal')
        homePage.getSampleGalleryListItem(3).should('contain.text', 'Remember your trip')
    })
})
