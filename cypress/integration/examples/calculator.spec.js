const { cyan } = require("color-name")

it ('Should check 5-2 equals 3', () => {

  // 1. Arrange
  cy.visit('http://127.0.0.1:5500')
  cy.get('#five').click();

  cy.get('#-').click();
  cy.get('#two').click();
  cy.get('#equals').click();
});

it ('Should check 5x2 equals 10', () => {
  cy.visit('http://127.0.0.1:5500')

  cy.get('#five').click();
  cy.get('#x').click();
  cy.get('#two').click();
  cy.get('#equals').click();
});

it ('Should check 98+2 equals 100', () => {
  cy.visit('http://127.0.0.1:5500')

  cy.get('#nine').click();
  cy.get('#eight').click();
  cy.get('#+').click();
  cy.get('#two').click();
  cy.get('#equals').click();
});

it ('Should check 100÷10 equals 10', () => {
  cy.visit('http://127.0.0.1:5500')

  cy.get('#one').click();
  cy.get('#zero').click();
  cy.get('#zero').click();
  cy.get('#÷').click();
  cy.get('#one').click();
  cy.get('#zero').click();
  cy.get('#equals').click();
});

it ('Should check 1.5x2 equals 3', () => {
  cy.visit('http://127.0.0.1:5500')

  cy.get('#one').click();
  cy.get('#decimal').click();
  cy.get('#five').click();
  cy.get('#x').click();
  cy.get('#two').click();
  cy.get('#equals').click();
})