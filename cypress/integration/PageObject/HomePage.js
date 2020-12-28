///<reference types="cypress"/>
import BasePage from './BasePage'

class HomePage
{
logout()
{
    // var bp=new BasePage()
    // bp.visit()
    cy.get('.ico-logout').click()
    }
}
export default HomePage