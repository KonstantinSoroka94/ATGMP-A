class LoginPage {
  enterLogin(login) {
    cy.get('[placeholder="Login"]').type(login);
  };

  enterPassword(password) {
    cy.get('[placeholder="Password"]').type(password);
  }

  pressLoginBtn() {
    return cy.get('button').contains('Login');
  }
}
const loginPage = new LoginPage();

export default loginPage;