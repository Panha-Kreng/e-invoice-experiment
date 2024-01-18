context('Sent Invoice', () => {
  it('Merchant able to view invoice details', () => {
    Cypress.on('uncaught:exception', () => false);
    cy.setToken();

    cy.visit(Cypress.config().baseUrl + '/invoice-sent/detail/B9176689E4F');
    cy.url().should('eq', Cypress.config().baseUrl + '/invoice-sent/detail/B9176689E4F');

    cy.wait(2000);

    cy.compareSnapshot({ name: 'Sent Invoice Details', testThreshold: 0.01 });
  });
});
