import { Given, And, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';

Given('Correct project selected', () => {
  cy.get('.projectSelector__current-project-name--vz3i6').first().click();
  cy.get(`[title="automatedtestingglobalmentoringprogram"]`).first().click();
});

When('Launches selected', () => {
  cy.get('span').contains('Launches').click({ force: true});
})

Before(() => {
  cy.visit('/');
  cy.get('[placeholder="Login"]').type('default');
  cy.get('[placeholder="Password"]').type('1q2w3e');
  cy.get('button').contains('Login').click();
})