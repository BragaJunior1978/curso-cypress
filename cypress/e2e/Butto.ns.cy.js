describe('Testando elemento na demoqa', () => {
    it('abrir o site', () => {
      cy.visit('https://demoqa.com/')
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > :nth-child(1) > .avatar').click();


      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-4 > .text').click();
      cy.get('#doubleClickBtn').click();
      cy.get('#doubleClickBtn').click();
      cy.get('#FBWGR').click();
      /* ==== End Cypress Studio ==== */
    })
  })