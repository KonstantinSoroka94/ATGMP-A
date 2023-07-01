class Launches {

  navigateToLaunches() {
    return cy.get('span').contains('Launches');
  };

  addFilter() {
    return cy.get('span').contains('Add filter');
  };

  selectFilterFromDropdown(filterName) {
    return cy.get('.inputCheckbox__children-container--1lo3t').contains(filterName);
  };

  enterFilterValueByName(filterName, value) {
    return cy.get('.fieldFilterEntity__field-filter-entity--1dlYg')
    .children('span')
    .contains(`${filterName}`)
    .siblings('div')
    .children('div')
    .children('input')
    .type(value);
  };

  selectFilterConditionByName(filterName, value) {
    cy.get('.fieldFilterEntity__field-filter-entity--1dlYg')
    .children('span')
    .contains(`${filterName}`)
    .siblings('div')
    .children('div')
    .children('.inputConditional__conditions-block--2Hg_w')
    .click();

    cy.get('.fieldFilterEntity__field-filter-entity--1dlYg')
    .children('span')
    .contains(`${filterName}`)
    .siblings('div')
    .children('div')
    .children('.inputConditional__conditions-block--2Hg_w')
    .children('div')
    .children('.inputConditional__condition--3BpCh')
    .contains(value)
    .click();
  };

  verifyFilterResults(isExist) {
    return cy.get('.gridRow__grid-row-wrapper--1dI9K').should(isExist);
  };

  selectLaunchByNumber(number) {
    cy.get(`[href="#automatedtestingglobalmentoringprogram/launches/all/${number}"]`).first().click();
  };

  selectLaunchLog() {
    cy.get('a').contains('Log view').click();
  };

  typeLogMessage(message) {
    cy.get('.inputSearch__input--3e4db').type(message).wait(1000);
  };

  clearLogSearch() {
    cy.get('.inputSearch__input--3e4db').clear();
  };

  verifyItemLogExist(isExist) {
    cy.get('.gridRow__log--3WSKF').should(isExist);
  };
  
  verifyFeaturesList(feature, isExist = "exist") {
    cy.get('.headerCell__title-full--2CU9W').contains(feature).should(isExist)
  }
}

const launches = new Launches();

export default launches;