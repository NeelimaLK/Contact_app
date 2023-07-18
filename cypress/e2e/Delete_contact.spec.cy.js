import Contact_page from '/Users/neelimalakamsani/Downloads/QA-Cypress-Test (1)/cypress/e2e/PageObjects/Contact_page.js'

describe('Test Contact App', () => 
 {

    it('Add contact info using POM, edit contact and delete contact', function() 
     {

        const cp = new Contact_page()
        cp.visit()
        cp.enterName('Gina')
        cp.enterPhone('54849393874')
        cp.enterEmail('abc@gmail.com')
        cp.clickAdd()

        
       cy.get('button[name=delete]').click()

       rwVaal.contains('Gina') //test should fail because contact has been deleted




     })
    })
