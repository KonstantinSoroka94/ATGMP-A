class SideBar {

  selectProject(projectName) {
    cy.get('.projectSelector__current-project-name--vz3i6').first().click();
    cy.get(`[title="${projectName}"]`).first().click();
  }
}

const sideBar = new SideBar()

export default sideBar;