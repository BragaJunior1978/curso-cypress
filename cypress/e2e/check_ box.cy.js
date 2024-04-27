describe('Testando elemento na demoqa', () => {
    it('abrir o site', () => {
      cy.visit('https://demoqa.com')
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > :nth-child(1) > .avatar').click();


      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click();
      cy.get('.rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-home').check();
      cy.get('.rct-option-expand-all > .rct-icon').click();
      cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-home').uncheck();
      cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-home').check();
      cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1) > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-documents').uncheck();
      cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-documents').check();
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-office').uncheck();
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-office').check();
      cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-downloads').uncheck();
      cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-downloads').check();
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-notes').uncheck();
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-notes').check();
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-commands').uncheck();
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-commands').check();
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .rct-collapse > .rct-icon > path').click();
      cy.get('.rct-node-collapsed > .rct-text > .rct-collapse > .rct-icon').click();
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-react').uncheck();
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-react').check();
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-angular').uncheck();
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-angular').check();
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(3) > .rct-text > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-veu').uncheck();
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(3) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-veu').check();
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-workspace').uncheck();
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-workspace').check();
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-public').uncheck();
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-public').check();
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-private').uncheck();
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-private').check();
      cy.get(':nth-child(2) > ol > :nth-child(3) > .rct-text > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-classified').uncheck();
      cy.get(':nth-child(2) > ol > :nth-child(3) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-classified').check();
      cy.get(':nth-child(4) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-general').uncheck();
      cy.get(':nth-child(4) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-general').check();
      cy.get(':nth-child(3) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-wordFile').uncheck();
      cy.get(':nth-child(3) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-wordFile').check();
      cy.get(':nth-child(3) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon > path').click();
      cy.get('#tree-node-excelFile').uncheck();
      cy.get(':nth-child(3) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click();
      cy.get('#tree-node-excelFile').check();
      cy.get('.cursor-pointer > img').click();
      /* ==== End Cypress Studio ==== */
    })
  })