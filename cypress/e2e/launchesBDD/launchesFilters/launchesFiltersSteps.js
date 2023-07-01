import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User add filter', () => {
  cy.get('span').contains('Add filter').click();
});

When(/^User select filter by name "(.*)" with value "(.*)" and condition "(.*)"$/, (name, value, cond) => {
    cy.get('.inputCheckbox__children-container--1lo3t').contains(name).click({force: true});
    cy.get('.fieldFilterEntity__field-filter-entity--1dlYg')
    .children('span')
    .contains(name)
    .siblings('div')
    .children('div')
    .children('.inputConditional__conditions-block--2Hg_w')
    .click();

    cy.get('.fieldFilterEntity__field-filter-entity--1dlYg')
    .children('span')
    .contains(name)
    .siblings('div')
    .children('div')
    .children('.inputConditional__conditions-block--2Hg_w')
    .children('div')
    .children('.inputConditional__condition--3BpCh')
    .contains(cond)
    .click();

    cy.get('.fieldFilterEntity__field-filter-entity--1dlYg')
    .children('span')
    .contains(name)
    .siblings('div')
    .children('div')
    .children('input')
    .type(value)
    .wait(2000);
});

When(/^User select filter by name with value that not exist and condition$/, (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.get('.inputCheckbox__children-container--1lo3t').contains(element.name).click({force: true});
    cy.get('.fieldFilterEntity__field-filter-entity--1dlYg')
    .children('span')
    .contains(element.name)
    .siblings('div')
    .children('div')
    .children('.inputConditional__conditions-block--2Hg_w')
    .click();

    cy.get('.fieldFilterEntity__field-filter-entity--1dlYg')
    .children('span')
    .contains(element.name)
    .siblings('div')
    .children('div')
    .children('.inputConditional__conditions-block--2Hg_w')
    .children('div')
    .children('.inputConditional__condition--3BpCh')
    .contains(element.condition)
    .click();

    cy.get('.fieldFilterEntity__field-filter-entity--1dlYg')
    .children('span')
    .contains(element.name)
    .siblings('div')
    .children('div')
    .children('input')
    .type(element.value)
    .wait(2000);
  })
})

Then('Filtered result should exist', () => {
  cy.get('.gridRow__grid-row-wrapper--1dI9K').should('exist');
});

Then('Filtered result should not exist', () => {
  cy.get('.gridRow__grid-row-wrapper--1dI9K').should('not.exist');
});