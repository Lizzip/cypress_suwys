/// <reference types="cypress" />

import homePage from '../pages/home'

describe('Visit the Home Page without the cookie set', () => {

    beforeEach(() => {
        homePage.visitAsPublic()
    })

    it('should display the "this page isn\'t live yet" text', () => {
        homePage.getPageText().should('contain.text', 'SUWYS isn\'t live yet, but you can join our newsletter below')
    })

    it('should display the newsletter signup', () => {
        homePage.getNewsletterEmail().should('exist')
        homePage.getNewsletterSignupButton().should('exist')

        //TODO: Check the functionality of the signup - currently unable due to developer request
    })

    it('should not display the button or links to the designer', () => {
        homePage.getDesignerButton().should('not.exist')
        homePage.getDesignerLinkHeader().should('not.exist')
        homePage.getDesignerLinkFooter().should('not.exist')
    })

    it('should not display the links to the gallery', () => {
        homePage.getGalleryLinkHeader().should('not.exist')
        homePage.getGalleryLinkFooter().should('not.exist')
    })

    it('should not display the link to the shopping cart', () => {
        homePage.getShoppingCart().should('not.exist')
    })
    
    it('should not display the links to the pricing page', () => {
        homePage.getPricingLinkFooter().should('not.exist')
        homePage.getAboutPricingLinkFooter().should('not.exist')
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
