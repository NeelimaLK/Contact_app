// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Customized command
Cypress.Commands.add("add_contact_details", (name, phone, email) => 
{
    cy.visit('./contact_app.html')
    cy.get('input[placeholder=Name]').type(name)
    cy.get('input[placeholder=Phone]').type(phone)
    cy.get('input[placeholder=Email]').type(email)
    cy.get('button[name=add').click()
})