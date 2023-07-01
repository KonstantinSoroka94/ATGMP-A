import loginPage from "../../pages/loginPage";
import { login, password } from "../../fixtures/credentials.json"
import launches from "../../pages/launches";
import possibleFilters from "../../fixtures/possibleFilters.json";
import sidebarElements from "../../fixtures/sidebarElements.json";
import sideBar from "../../pages/sideBarNavigation";
describe('It should be possible', () => {

  beforeEach(() => {
    cy.visit('/');
    loginPage.enterLogin(login);
    loginPage.enterPassword(password);
    loginPage.pressLoginBtn().click();
    sideBar.selectProject(sidebarElements.projectName);
    launches.navigateToLaunches().click({force: true});
  });

  it('To filter launches by name and existing value', () => {
    possibleFilters.forEach((launchData) => {
      launches.addFilter().click();
      launches.selectFilterFromDropdown(launchData.name).click({force: true});
      launches.selectFilterConditionByName(launchData.name, 'Greater than or equal');
      launches.enterFilterValueByName(launchData.name, launchData.value.passedFilter);
      cy.wait(2000);
      launches.verifyFilterResults('exist');
    })
  });

  it('To filter launches by name and non existing value', () => {
    possibleFilters.forEach((launchData) => {
      launches.addFilter().click();
      launches.selectFilterFromDropdown(launchData.name).click({force: true});
      launches.selectFilterConditionByName(launchData.name, 'Equals');
      launches.enterFilterValueByName(launchData.name, launchData.value.failedFilter);
      cy.wait(2000);
      launches.verifyFilterResults('not.exist');
    })
  })
});
