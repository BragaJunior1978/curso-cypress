describe('Testando elemento na demoqa', () => {
    it('abrir o site', () => {
      cy.visit('https://demoqa.com')
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > :nth-child(1) > .avatar').click();


      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click();
      cy.get('#simpleLink').click();
      cy.get('#dynamicLink').click();
      cy.get('#created').click();
      cy.get('#no-content').click();
      cy.get('#moved').click();
      cy.get('#bad-request').click();
      cy.get('#unauthorized').click();
      cy.get('#forbidden').click();
      cy.get('#invalid-url').click();
      /* ==== End Cypress Studio ==== */
    })
  })