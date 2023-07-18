/// <reference types="cypress" />

describe('Test Contact App', () => {

  


    before(() => {
      cy.fixture('example').then(function(data)
        {
          this.data=data
          
          
    })
  })


    it('Datadriven with fixtures file', function()
    {
      cy.visit('./contact_app.html')
      cy.get('input[placeholder=Name]').should('be.visible').should ('be.enabled').type(this.data.name)  // enter Name
      cy.get('input[placeholder=Phone]').should('be.visible').should ('be.enabled').type(this.data.phone) //enter Phone
      cy.get('input[placeholder=Email]').should('be.visible').should ('be.enabled').type(this.data.email) //enter email
      cy.get('button[name=add').should('be.visible').should('be.enabled').click() //click Add button
      
    })
})
