///<reference types="cypress"/>
import BasePage from './BasePage'

class LoginPage {
    loginTitle() {
        var bp = new BasePage()
        bp.visit()
        cy.get('.ico-login').click()
        cy.title().should('eq', 'nopCommerce demo store. Login')
        cy.log('Correct title loaded successfully')
    }

    enterInputValue(locator, value) {
        cy.get(locator).should('be.visible').type(value)
        return this
    }

    enterNullData() {
        this.loginTitle()
        this.enterInputValue("#Email", " ")
        this.enterInputValue("#Password", " ")
        this.LoginUser()
        cy.wait(500)
        cy.get('#Email-error').contains('Please enter your email')
        cy.log('Null case error message passed')
        return this
    }

    enterValidCredentials(dataSet) {
        this.loginTitle()
        this.enterInputValue("#Email", dataSet.email)
        this.enterInputValue("#Password", dataSet.password)
        cy.wait(500)
        this.LoginUser()
        cy.wait(500)
        cy.get('.ico-logout').contains('Log out')
        cy.log('Login passed')
        return this
    }
    enterInvalidEmail() {
        this.loginTitle()
        this.enterInputValue("#Email", "adghka")
        this.enterInputValue("#Password", "agdj")
        this.LoginUser()
        cy.wait(500)
        cy.get('#Email-error').contains('Wrong email')
        cy.log('Invalid email error message passed')
        return this
    }

    enterInvalidCredentials() {
        this.loginTitle()
        this.enterInputValue("#Email", "adghkas@getnada.com")
        this.enterInputValue("#Password", "agdj")
        this.LoginUser()
        cy.wait(500)
        cy.get('.message-error').contains('Login was unsuccessful. Please correct the errors and try again.')
        cy.log('Invalid credentials error message passed')
        return this
    }

    LoginUser() {
        cy.wait(500)
        cy.get('form > .buttons > .button-1').should('be.visible').click()
    }

}

export default LoginPage