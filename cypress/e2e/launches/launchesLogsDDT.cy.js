import loginPage from "../../pages/loginPage";
import { login, password } from "../../fixtures/credentials.json"
import launches from "../../pages/launches";
import logs from "../../fixtures/logMessage.json"
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
    launches.selectLaunchByNumber(10);
    launches.selectLaunchLog();
  });
  it('to search by message or word that could be fould in the logs', () => {
    logs.exist.forEach((logs) => {
      launches.typeLogMessage(logs);
      launches.verifyItemLogExist("exist");
      launches.clearLogSearch();
    });
  });

  it('to search by message or word that could not be fould in the logs', () => {
    logs.absent.forEach((logs) => {
      launches.typeLogMessage(logs);
      launches.verifyItemLogExist("not.exist");
      launches.clearLogSearch();
    });
  });
});
