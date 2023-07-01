import loginPage from "../../pages/loginPage";
import { login, password } from "../../fixtures/credentials.json"
import launches from "../../pages/launches";
import launchesFeatures from "../../fixtures/launchesFeatures.json"
import sidebarElements from "../../fixtures/sidebarElements.json";
import sideBar from "../../pages/sideBarNavigation";
describe('Features of the Launches', () => {

  beforeEach(() => {
    cy.visit('/');
    loginPage.enterLogin(login);
    loginPage.enterPassword(password);
    loginPage.pressLoginBtn().click();
    sideBar.selectProject(sidebarElements.projectName);
    launches.navigateToLaunches().click({force: true});
  });

  it('Should exist', () => {
    launchesFeatures.forEach((launchData) => {
      launches.verifyFeaturesList(launchData.name)
    })
  });

});
