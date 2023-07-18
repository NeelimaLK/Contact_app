describe('Test Contact App', () => {

  
 
      it('Click button function testing using custom command', function()
      {
        cy.add_contact_details('RM', '677533678', 'abc@gmail.com')
        cy.get('button[name=add').should('be.enabled') //click button must be enabled

      })
      it('Add button function testing using custom command', function()
      {
        cy.add_contact_details('', '', '')
        cy.get('button[name=add').should('not.be.enabled') //Error message must be displayed and click button must be disabled

      })
      
    })