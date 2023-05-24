describe('Store Testcase', () => {      
  it('Store > Dashboard functionality', () => 
  {
    cy.visit('/')
    cy.document().should('have.property', 'charset').and('eq','UTF-8')
    cy.title().should('include', 'Vepaar Web')
    //cy.url().should('include', 'vepaar_website')
    cy.get(':nth-child(1) > .field > .field__content > .field-block').type("avadhraj@7span.com")
    cy.get(':nth-child(2) > .field > .field__content > .field-block').type("a")
    cy.get('.vp-flex > .button').click()
    cy.wait(10000)
  })

});