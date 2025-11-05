/// <reference types="cypress" />

class BasePage {

    ////////////
    // Getters
    ////////////
    getTitle = () => cy.title();
    getFooter = () => cy.get('body footer');
    getHeader = () => cy.get('body header');
    getHeaderTitle = () => this.getHeader().find('h1');



    ////////////
    // Actions
    ////////////

    // The cookie is required to see the majority of the website functionality
    visitWithCookie = url => cy.visit(url + "/?magicword=seagull")
    visitWithoutCookie = url => cy.visit(url)
}

module.exports = BasePage;