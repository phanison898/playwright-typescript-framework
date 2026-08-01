import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Valid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login("standard_user", "secret_sauce");

  await loginPage.verifyLoginSuccessful();
});

test("Locked User Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login("locked_out_user", "secret_sauce");

  await loginPage.verifyErrorMessage("Sorry, this user has been locked out.");
});
