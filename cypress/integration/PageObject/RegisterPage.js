///<reference types="cypress"/>
import BasePage from "./BasePage"

class RegisterPage {
    register() {
        var basePage = new BasePage()
        basePage.visit()
        cy.get(".ico-register").click()

    }

    checkTitle() {
        cy.title().should("eq", "nopCommerce demo store. Register")
    }

    enterUserValues(dataSet) {
        if (dataSet.gender == "M") {
            this.enterRadioValue("#gender-male")
        } else if (dataSet.gender == "F") {
            this.enterRadioValue("#gender-female")
        }

        this.enterInputValue("#FirstName", dataSet.firstname)
        this.enterInputValue("#LastName", dataSet.lastname)
        this.enterInputValue("#Email", dataSet.email)
        this.enterInputValue("#Company", dataSet.companyName)
        cy.log(dataSet.password)
        cy.log(dataSet.confirmPassword)

        this.enterInputValue("#Password", dataSet.password)
        this.enterInputValue("#ConfirmPassword", dataSet.confirmPassword)
        this.enterDropDownValue("[name=DateOfBirthDay]", dataSet.day)
        this.enterDropDownValue("[name=DateOfBirthMonth]", dataSet.month)
        this.enterDropDownValue("[name=DateOfBirthYear]", dataSet.year)
    }

    enterInputValue(locator, value) {
        cy.get(locator).should('be.visible').type(value)
        return this
    }

    enterRadioValue(locator) {
        cy.get(locator).should('be.visible').click()
        return this
    }

    enterDropDownValue(locator, value) {
        cy.get(locator).select(value)
    }

    registerUser()
    {
        cy.get('#register-button').should('be.visible').click()
    }
    

}

export default RegisterPage