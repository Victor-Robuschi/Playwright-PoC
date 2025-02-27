import { expect, Locator, Page } from "@playwright/test";

export class BrowserWindows {
  readonly page: Page;
  readonly BrowserWindowsPage: Locator;
  readonly NewTab: Locator;
  readonly NewWindow: Locator;
  readonly NewWindowMessage: Locator;
  readonly NewWindowExpectedText: string;
  readonly NewWindowMessageExpectedText: string;



  constructor(page: Page) {
    this.page = page;
    this.BrowserWindowsPage = page.getByText('Browser Windows')
    this.NewTab = page.locator('#tabButton')
    this.NewWindow = page.locator('#windowButton')
    this.NewWindowMessage = page.locator('#messageWindowButton')
    this.NewWindowExpectedText = 'This is a sample page'
    this.NewWindowMessageExpectedText = 'Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.'


    
  }

  async clickButtonAndGetNewTab(buttonLocator: Locator): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      buttonLocator.click(),
    ]);
    await newPage.waitForLoadState("domcontentloaded");
    return newPage;
  }

  async clickAndGetNewWindow(locator: Locator): Promise<Page> {
    return this.clickButtonAndGetNewTab(locator);
  }


  async verifyTextNewWindow(newPage, expectedText: string): Promise<boolean> {
    try {
      await expect(newPage).toHaveText(expectedText);
      return true;
    } catch (error) {
      return false;
    }

  }

}
