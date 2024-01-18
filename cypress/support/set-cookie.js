Cypress.Commands.add('setToken', () => {
  cy.setCookie('token', Cypress.env('token'));
  cy.setCookie('refreshToken', Cypress.env('refreshToken'));
});
