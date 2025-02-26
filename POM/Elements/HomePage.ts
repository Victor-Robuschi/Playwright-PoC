import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly elementsbutton: Locator;
  readonly ElementSpan: Locator;
  readonly Forms: Locator;
  readonly AlFrWin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.elementsbutton = page.getByRole("heading", { name: "Elements" });
    this.ElementSpan = page.locator("span").filter({ hasText: "Elements" }).locator("div").first();
    this.AlFrWin = page.locator('div').filter({ hasText: /^Alerts, Frame & Windows$/ }).first()
    this.Forms = page.locator("span").filter({ hasText: "Forms" }).locator("div").first();
  }

  async goto() {
    await this.page.goto("/");
  }

  async elementspage() {
    await this.elementsbutton.click();
  }
  
  async Formspage() {
    await this.Forms.click();
  }
  
  async AlFrWinPage() {
    await this.AlFrWin.click();
  }

}
