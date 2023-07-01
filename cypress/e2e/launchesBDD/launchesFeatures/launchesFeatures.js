import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('The Features of the Launches should exist', (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.get('.headerCell__title-full--2CU9W').contains(element.feature).should("exist")
  })
})