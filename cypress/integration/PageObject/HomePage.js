///<reference types="cypress"/>
import BasePage from './BasePage'

class HomePage {
    logout() {
        cy.get('.ico-logout').click()
    }
}
export default HomePage