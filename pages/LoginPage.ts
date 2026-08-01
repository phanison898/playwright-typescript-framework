import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private username = "#user-name";

  private password = "#password";

  private loginButton = "#login-button";

  private errorMessage = "[data-test='error']";

  async open() {
    await this.navigate("https://www.saucedemo.com/");
  }

  async login(username: string, password: string) {
    await this.page.fill(this.username, username);

    await this.page.fill(this.password, password);

    await this.page.click(this.loginButton);
  }

  async verifyLoginSuccessful() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async verifyErrorMessage(expected: string) {
    await expect(this.page.locator(this.errorMessage)).toContainText(expected);
  }
}
