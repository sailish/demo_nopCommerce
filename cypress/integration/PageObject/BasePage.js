///<reference types="cypress"/>

class BasePage {
    visit() {
        cy.visit("https://demo.nopcommerce.com/")
    }

}

export default BasePage