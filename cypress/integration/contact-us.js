/// <reference types="cypress"/>

describe("Test Contact Us form via Webdriver", () => {

    it("Should be able to submit a succesful submission via contact us form", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#contact-us').click({force: true})    

});

it("Should not be able to submit a succesful submission via contact us form", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#contact-us').click({force: true})   

})