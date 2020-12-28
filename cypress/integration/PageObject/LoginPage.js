///<reference types="cypress"/>
import BasePage from './BasePage'

class LoginPage
{
loginScreen()
{
   var bp= new BasePage()
   bp.visit()
   cy.get('.ico-login').click() 
   cy.title().should('eq','nopCommerce demo store. Login')

}

enterNullData(locator, value) {
    cy.get(locator).should('be.visible').type(value)
    return this
}

}