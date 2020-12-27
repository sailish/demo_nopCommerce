///<reference types="cypress"/>

class HomePage
{
logout()
{
    cy.get('.ico-logout').click()
}
}
export default HomePage