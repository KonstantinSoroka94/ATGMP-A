import {When, Then, And } from 'cypress-cucumber-preprocessor/steps';

And("Logs should be displayed for {int}'s test", (number) => {
  cy.get(`[href="#automatedtestingglobalmentoringprogram/launches/all/${number}"]`).first().click();
  cy.get('a').contains('Log view').click();
})

When(/^Searching for logs by existing message "(.*)"$/, (message) => {
  cy.get('.inputSearch__input--3e4db').type(message).wait(1000);
})

Then('Search result should not be empty', () => {
  cy.get('.gridRow__log--3WSKF').should('exist');
});

Then('Search result should be empty', () => {
  cy.get('.gridRow__log--3WSKF').should('not.exist');
})