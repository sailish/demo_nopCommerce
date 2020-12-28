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
    cy.get('#Email-error').should('have.value','Please enter your email')
    return this
}

enterValidCredentials(dataSet)
{
    this.loginTitle()
    this.enterInputValue("#Email", dataSet.email)
    this.enterInputValue("#Password", dataSet.password)
    this.LoginUser()

}

enterInvalidCredentials() 
{
    this.loginTitle()
    this.enterInputValue("#Email","adghkas")
    this.enterInputValue("#Password", "agdj")
    this.LoginUser()
    cy.wait(500)
    cy.get('#Email-error').should('have.value','Login was unsuccessful. Please correct the errors and try again.')
    return this
}

LoginUser()
    {
        cy.wait(500)
        cy.get('form > .buttons > .button-1').should('be.visible').click()
    }

}

export default LoginPage