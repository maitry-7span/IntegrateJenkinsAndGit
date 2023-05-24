// describe('Add product - simple type Testcase', () => {
//     beforeEach(() =>{
//       cy.visit('/')
//       cy.document().should('have.property', 'charset').and('eq','UTF-8')
//       cy.title().should('include', 'Vepaar Web')
//       //cy.url().should('include', 'vepaar_website')
//       cy.get(':nth-child(1) > .field > .field__content > .field-block').type("avadhraj@7span.com")
//       cy.get(':nth-child(2) > .field > .field__content > .field-block').type("a")
//       cy.get('.vp-flex > .button').click()
//       cy.wait(10000)
//     })

    
//     it('Store > Add Charges functionality', () => {

//         cy.get('[href="#/store/"] > .button__label')
//         .contains('Store')
//         .click()
//         cy.wait(5000)
    
//         cy.xpath("//span[normalize-space()='Charges']").click()
//         cy.xpath("//span[normalize-space()='Add New']").click()
//         cy.wait(2000)
    
//         cy.xpath("(//input[@class='field-block'])[1]").click().clear().type("Delivery Charge")
//         cy.xpath("//input[@type='number']").click().clear().type("50")
//         cy.xpath("//span[normalize-space()='Create']").click()
//         cy.wait(2000)
//     })

//     it('Store > Add Badges functionality', () => {
//         cy.get('[href="#/store/"] > .button__label')
//         .contains('Store')
//         .click()
//         cy.wait(5000)
    
//         cy.xpath("//span[normalize-space()='Badges']").click()
//         cy.xpath("//span[normalize-space()='Add New']").click()
    
//         cy.xpath("//input[@class='field-block']").click().clear().type("Popular")
//         cy.xpath("(//div[@class='color-block vp-mr-1 vp-bg-pink-500 vp-text-white hover:vp-bg-pink-700'])[1]").click()
//         cy.xpath("//label[@for='status-input']").click()
//         cy.xpath("//label[@for='status-input']").click()
//         cy.xpath("//span[normalize-space()='Create']").click()
//         cy.wait(2000)
//     }) 

//     it('Store > Add Categories functionality', () => {

//         cy.get('[href="#/store/"] > .button__label')
//         .contains('Store')
//         .click()
//         cy.wait(5000)
    
//         cy.xpath("//span[normalize-space()='Categories']").click()
//         cy.xpath("//span[normalize-space()='Add New']").click()
    
//         cy.xpath("//input[@class='field-block']").click().clear().type("BTest")
//         cy.xpath("//input[@type='file']").selectFile("C:\\Users\\Span1\\Downloads\\banner1.jpg")
//         cy.wait(2000)
//         cy.xpath("//label[@for='status-input']").click()
//         cy.wait(1500)
//         cy.xpath("//label[@for='status-input']").click()
//         cy.xpath("//span[normalize-space()='Create']").click()
//         cy.wait(3000)
//     })

//     it('Store > Product functionality - simple type', () => {
//         cy.get('[href="#/store/"] > .button__label')
//         .contains('Store')
//         .click()
//         cy.wait(5000)
    
//         cy.xpath("//span[@class='button__label'][normalize-space()='Products']").click()
//         cy.wait(2000)
    
//         cy.xpath("//span[normalize-space()='Add New']").click()
//         cy.xpath("//a[@href='#/store/products/+/?type=simple']").click()
//         cy.wait(2000)
//         cy.xpath("(//input)[1]").click().clear().type("Maitry")
//         cy.wait(2000)
//         cy.xpath("//div[@class='vs__selected-options']").click()
//         cy.wait(5000)
//         cy.xpath("//p[contains(normalize-space(),'CTest')]").scrollIntoView().click()
//         cy.xpath("(//input[@type='number'])[2]").click().clear().type("500")
//         cy.xpath("//label[@for='status-input']").click()
//         cy.xpath("//label[@for='status-input']").click()
//         cy.xpath("//span[normalize-space()='Continue']").click()
    
//         cy.wait(5000)
//         cy.xpath("//span[normalize-space()='Add New Media']").click()
//         cy.xpath("//input[@type='file']").selectFile("C:\\Users\\Span1\\Downloads\\banner1.jpg")
//         cy.wait(3000)
//         cy.xpath("//span[normalize-space()='Crop and Upload']").click()
//         cy.xpath(5000)
    
//         cy.xpath("(//span[@class='button__label'][normalize-space()='Badges'])[2]").click()
//         cy.xpath("(//div[@class='switch__indicator'])[1]").click()
//         cy.wait(3000)
    
//         cy.xpath("(//span[@class='button__label'][normalize-space()='Charges'])[2]").click()
//         cy.wait(2000)
//         cy.xpath("(//div[@class='switch__indicator'])[1]").click()
//         cy.wait(2000)
    
//         cy.xpath("//span[normalize-space()='Stock']").click()
//         cy.xpath("//input[@type='number']").click().clear().type("2")
//         cy.xpath("//span[normalize-space()='Save']").click()
//         cy.wait(2000)
    
//         cy.xpath("(//span[@class='button__label'][normalize-space()='Reviews'])[2]").click()
//         cy.wait(2000)
//     })
// });

// describe('Visit Store Testcase', () => {
//     beforeEach(() => {
//         cy.visit('https://vepaar.store/7Ocean')
//     })

//     it('Order place functionality for simple type', () => {
            
//     })
 //});

describe('Verify product on a different tab', () => {
    beforeEach(() =>{
        cy.visit('/')
        cy.document().should('have.property', 'charset').and('eq','UTF-8')
        cy.title().should('include', 'Vepaar Web')
        //cy.url().should('include', 'vepaar_website')
        cy.get(':nth-child(1) > .field > .field__content > .field-block').type("avadhraj@7span.com")
        cy.get(':nth-child(2) > .field > .field__content > .field-block').type("a")
        cy.get('.vp-flex > .button').click()
        cy.wait(10000)
      })

    it('should open vepaar.com and navigate to store', () => {
      // Visit vepaar.com
      cy.visit('/')
  
      // Click on the store link to open it in a new tab
      cy.get('a[href="/store"]').invoke('removeAttr', 'target').click()
  
      // Switch to the new tab
      cy.window().then((win) => {
        win.focus()
      })
  
      // Verify that we're on the store page
      cy.url().should('include', '/store')
  
      // Find the product and verify its details
      cy.contains('Product Name').click()
      cy.get('.product-description').should('contain', 'Product Name')
      cy.get('.product-price').should('contain', '$19.99')
    })
  })