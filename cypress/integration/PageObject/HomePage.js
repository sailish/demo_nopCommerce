///<reference types="cypress"/>
import BasePage from './BasePage'

class HomePage {
    logout() {
        cy.get('.ico-logout').click()        
        cy.log('Logout case passed')
    }
}
export default HomePage