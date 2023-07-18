describe('Test Contact App', () => 
 {

    it('Verify Title Of The Page', function() // Positive Test
     {
      cy.visit('./contact_app.html')
      cy.title().should('eq', 'Contact List App')
      cy.url().should('include','contact_app') //Verify URL should include 'contact_app'
    })

    it('Verify Title Of The Page', function() // Negative Test
     {
      cy.visit('./contact_app.html')
      cy.title().should('eq', 'Contact App')
      
    })
   
  })
  