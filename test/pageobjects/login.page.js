class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input[placeholder="Login"]');
    }

    get inputPassword () {
        return $('input[placeholder="Password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
