import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test("Add product to cart", async ({ page }) => {
  const loginPage = new LoginPage(page);

  const inventoryPage = new InventoryPage(page);

  await loginPage.open();

  await loginPage.login("standard_user", "secret_sauce");

  await inventoryPage.addBackpackToCart();

  await inventoryPage.verifyCartCount("1");
});
