Login Automation with Playwright Using Page Object Model
Overview
This project demonstrates login automation using Playwright with the Page Object Model (POM) design pattern. The Page Object Model is a design pattern that enhances test maintainability by creating a class for each page of the application. Each class contains methods and properties that interact with the elements on that page.

Project Structure
pages/: Contains Page Object Model classes representing different pages of the application.
loginPage.js: Contains methods and properties related to the login page.
tests/: Contains test scenarios that use the page objects.
login.test.js: Contains different test scenarios for login functionality.
utils/: Contains utility files (e.g., configuration files).
package.json: Project dependencies and scripts.
README.txt: This file.
Prerequisites
Node.js: Make sure Node.js is installed. You can download it from nodejs.org.
Playwright: This project uses Playwright for browser automation.
Setup
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-directory>
Install dependencies:

bash
Copy code
npm install
Configure Playwright:

Playwright needs to install browsers for the first time. Run the following command to install them:

bash
Copy code
npx playwright install
Page Object Model (POM) Design
loginPage.js
This file defines a LoginPage class with methods to interact with the login page elements:

javascript
Copy code
// pages/loginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('https://example.com/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginError(message) {
    const errorMessage = this.page.locator('#login-error');
    await expect(errorMessage).toHaveText(message);
  }
}

module.exports = LoginPage;
Test Scenarios
login.test.js
This file contains various test scenarios to validate login functionality:

javascript
Copy code
// tests/login.test.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test.describe('Login Page Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('should login successfully with valid credentials', async () => {
    await loginPage.login('validUser', 'validPassword');
    // Add assertions to verify successful login
  });

  test('should show error for invalid credentials', async () => {
    await loginPage.login('invalidUser', 'invalidPassword');
    await loginPage.assertLoginError('Invalid username or password');
  });

  test('should show error for empty credentials', async () => {
    await loginPage.login('', '');
    await loginPage.assertLoginError('Username and password cannot be empty');
  });
});
Running Tests
To run the tests, use the following command:

bash
Copy code
npx playwright test
Additional Information
Playwright Documentation: Playwright Docs
Page Object Model: This design pattern helps in maintaining and scaling tests effectively by separating page-specific code.
