import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private backpackButton = "#add-to-cart-sauce-labs-backpack";

  private cartBadge = ".shopping_cart_badge";

  async addBackpackToCart() {
    await this.page.click(this.backpackButton);
  }

  async verifyCartCount(count: string) {
    await expect(this.page.locator(this.cartBadge)).toHaveText(count);
  }
}
