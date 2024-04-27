describe('Testando elemento na demoqa', () => {
  it('abrir o site', () => {
    cy.visit('https://demoqa.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click();
    cy.get('#userName').clear('A');
    cy.get('#userName').type('Braga Junior');
    cy.get('#userEmail').clear('t');
    cy.get('#userEmail').type('teste@teste.com');
    cy.get('#currentAddress').click();
    cy.get('#permanentAddress').click();
    cy.get('#submit').click();
    /* ==== End Cypress Studio ==== */
  })
})