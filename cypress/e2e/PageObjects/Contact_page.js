class Contact_page
{
    visit()
    {
        cy.visit('./contact_app.html')
    
    }

    enterName(value)
    {
        const field=cy.get('input[placeholder=Name]')
        field.type(value)
        return this 

    }

    enterPhone(value)
    {
        const field= cy.get('input[placeholder=Phone]')
        field.type(value)
        return this
    }

    enterEmail(value)
    {
        const field= cy.get('input[placeholder=Email]')
        field.type(value)
        return this 
    }

    clickAdd()
    {
        const button= cy.get('button[name=add')
        button.click()
    }

    
}

export default Contact_page 

