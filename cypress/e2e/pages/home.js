/// <reference types="cypress" />

import BasePage from './basePage'

class HomePage extends BasePage {

    ////////////
    // Getters
    ////////////
    getPageText = () => cy.get(".text");
    getShoppingCart = () => this.getHeader().contains('a', 'Shopping cart')
    getContactLink = () => this.getFooter().contains('a', 'Contact')
    getAboutLink = () => this.getFooter().contains('a', 'About SUWYS')
    getPrivacyLink = () => this.getFooter().contains('a', 'Privacy policy')


    // Newsletter features
    getNewsletterSignup = () => cy.get('#newsletter_signup');
    getNewsletterEmail = () => cy.get('#email');
    getNewsletterSignupButton = () => cy.get('input[name="commit"]');

    // Links to the designer
    getDesignerButton = () => cy.contains('.button.button-large', 'Design yours »');
    getDesignerLinkHeader = () => this.getHeader().contains('a', 'Design your poster');
    getDesignerLinkFooter = () => this.getFooter().contains('a', 'Design your own poster');

    // Links to the gallery
    getGalleryLinkHeader = () => this.getHeader().contains('a', 'Browse examples');
    getGalleryLinkFooter = () => this.getFooter().contains('a', 'Browse and buy existing posters');

    // Links to the pricing page
    getPricingLinkFooter = () => this.getFooter().contains('a', 'Pricing');
    getAboutPricingLinkFooter = () => this.getFooter().contains('a', 'About our products');

    // Sample gallery
    getSampleGalleryList = () => cy.get('ul.tiles');
    getSampleGalleryListItems = () => this.getSampleGalleryList().find('li');
    getSampleGalleryListItem = item => this.getSampleGalleryList().find(`li:nth-child(${item})`)


    ////////////
    // Actions
    ////////////
    visit = () => this.visitWithCookie("/");
    visitAsPublic = () => this.visitWithoutCookie("/");
}

module.exports = new HomePage();