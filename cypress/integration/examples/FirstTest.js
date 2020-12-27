describe('Registration',function(){

    it('Registration of users positive',function()
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce demo store')
    }

    )
    
    it('Registration of users negative',function()
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce demo stores')
    }

    )
})