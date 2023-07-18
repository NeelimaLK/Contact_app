describe('Test Contact App', () => {

  
    
         it('Click button function testing using custom command', function()
         {
           cy.add_contact_details('RM', '677533678', 'abc@gmail.com')
           cy.get('button[name=add').should('be.enabled').click() 

           const rwVaal= cy.get('table > tbody > tr > td:nth-child(1)')
           rwVaal.contains('RM')

           rwVaal.each(($elm, index, $list) =>
           {
            const t = $elm.text();
            if (t.includes('RM'))
            {
                cy.get('table > tbody > tr > td:nth-child(2)').eq(index).then(function(Rphone)
                {
                    const rPhone= Rphone.text()
                    expect(rPhone). to.equal("677533678")
                })
                cy.get('table > tbody > tr > td:nth-child(3)').eq(index).then(function(Remail)
                {
                    const rEmail= Remail.text()
                    expect(rEmail). to.equal("abc@gmail.com")
                })
            }
           })


           
   
         })
         
       })