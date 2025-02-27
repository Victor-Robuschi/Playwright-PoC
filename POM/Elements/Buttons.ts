import { expect, Locator, Page } from "@playwright/test";

export class Buttons {
  readonly page: Page;
  readonly PageButtons: Locator;
  readonly Click: Locator;
  readonly ClickResult: Locator;
  readonly DoubleClick: Locator;
  readonly DoubleClickResult: Locator;
  readonly RightClick: Locator;
  readonly RightClickResult: Locator;

  constructor(page: Page) {
    this.page = page;
    this.PageButtons = page.getByRole("list").getByText("Buttons");
    this.Click = this.page.getByRole('button', { name: 'Click Me', exact: true })
    this.ClickResult = this.page.locator("#dynamicClickMessage");
    this.DoubleClick = this.page.getByRole('button', { name: 'Double Click Me' })
    this.DoubleClickResult = this.page.locator("#doubleClickMessage");
    this.RightClick = this.page.getByRole('button', { name: 'Right Click Me' })
    this.RightClickResult = this.page.locator("#rightClickMessage");
  }

    async openPageButtons() {
        await this.PageButtons.click();
    }
  async clickButton() {
    await this.Click.click();
  }
  async clickButtonResult() {
    expect(await this.ClickResult.innerText()).toBe(
      "You have done a dynamic click"
    );
  }

  async doubleClickButton() {
    await this.DoubleClick.dblclick();
  }
  async doubleClickButtonResult() {
    expect(await this.DoubleClickResult.innerText()).toBe(
      "You have done a double click"
    );
  }

  async rightClickButton() {
    await this.RightClick.click({ button: "right" });
  }

  async rightClickButtonResult() {
    expect(await this.RightClickResult.innerText()).toBe(
      "You have done a right click"
    );
  }
}
