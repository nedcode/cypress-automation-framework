/// <reference types="cypress"/>

describe("Test Contact Us via Automation Test Store", () => {

    it("Should be able to submit a succesful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk order")
        cy.get('.col-md-6 > .btn').click()
    });

})