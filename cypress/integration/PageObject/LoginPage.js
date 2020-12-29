///<reference types="cypress"/>
import BasePage from './BasePage'

class LoginPage
{
loginTitle()
{
   var bp= new BasePage()
   bp.visit()
   cy.get('.ico-login').click() 
//    cy.wait('4000') cy.get('#Email')
   cy.title().should('eq','nopCommerce demo store. Login')

}

enterInputValue(locator, value) 
{
    cy.get(locator).should('be.visible').type(value)
    return this
}

enterNullData() 
{
    this.loginTitle()
    this.enterInputValue("#Email", " ")
    this.enterInputValue("#Password"," ")
    this.LoginUser()
    cy.wait(500)
    cy.get('#Email-error').contains('Please enter your email')
    return this
}

enterValidCredentials(dataSet)
{
    this.loginTitle()
    this.enterInputValue("#Email", dataSet.email)
    this.enterInputValue("#Password", dataSet.password)
    cy.wait(500)
    this.LoginUser()
    cy.wait(500)
    return this
}
enterInvalidEmail() 
{
    this.loginTitle()
    this.enterInputValue("#Email","adghka")
    this.enterInputValue("#Password", "agdj")
    this.LoginUser()
    cy.wait(500)
    cy.get('#Email-error').contains('Wrong email')
    return this
}

enterInvalidCredentials() 
{
    this.loginTitle()
    this.enterInputValue("#Email","adghkas@getnada.com")
    this.enterInputValue("#Password", "agdj")
    this.LoginUser()
    cy.wait(500)
    cy.get('.message-error').contains('Login was unsuccessful. Please correct the errors and try again.')
    return this
}

LoginUser()
    {
        cy.wait(500)
        cy.get('form > .buttons > .button-1').should('be.visible').click()
    }

}

export default LoginPage