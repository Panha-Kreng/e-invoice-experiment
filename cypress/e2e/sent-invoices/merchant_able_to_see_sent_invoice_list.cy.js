context('Sent Invoice', () => {
  it('Merchant able to see sent invoice list', () => {
    Cypress.on('uncaught:exception', () => false);
    cy.setToken();

    cy.visit(Cypress.config().baseUrl);
    cy.url().should('eq', Cypress.config().baseUrl + '/invoice-sent');

    cy.wait(2000);

    cy.compareSnapshot({ name: 'home-page', testThreshold: 0.01 });

    cy.get('div.grid > div').then(($header) => {
      cy.wrap($header)
        .first()
        .within(() => {
          cy.get('p').first().should('have.text', 'Invoice Sent').and('be.visible');
          cy.get('p').last().should('have.text', 'Invoice Sent').and('be.visible');
        });

      cy.get('input[placeholder="Search (Invoice Number, Name)"]').should('be.visible');
    });
  });
});
