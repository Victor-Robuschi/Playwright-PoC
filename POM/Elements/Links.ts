import { expect, Locator, Page, APIResponse } from "@playwright/test";

export class Links {
  readonly page: Page;
  readonly PageLinks: Locator;
  readonly SimpleLink: Locator;
  readonly DynamicLink: Locator;
  readonly expectedURL: string;
  readonly Created: Locator;
  readonly NoContent: Locator;
  readonly Moved: Locator;
  readonly BadRequest: Locator;
  readonly Unauthorized: Locator;
  readonly Forbidden: Locator;
  readonly NotFound: Locator;
  readonly LinkResponse: Locator;
  readonly CreatedResponseText: string;
  readonly NoContentResponseText: string;
  readonly MovedResponseText: string;
  readonly BadRequestResponseText: string;
  readonly UnauthorizedResponseText: string;
  readonly ForbiddenResponseText: string;
  readonly NotFoundResponseText: string;
  readonly CreatedURL: string;
  readonly NoContentURL: string;
  readonly MovedURL: string;
  readonly BadRequestURL: string;
  readonly UnauthorizedURL: string;
  readonly ForbiddenURL: string;
  readonly NotFoundURL: string;

  constructor(page: Page) {
    this.page = page;
    this.PageLinks = page
      .locator(".element-list")
      .first()
      .getByText("Links", { exact: true });
    this.SimpleLink = this.page.locator("#simpleLink");
    this.DynamicLink = this.page.locator("#dynamicLink");
    this.expectedURL = "https://demoqa.com/";
    this.Created = this.page.locator("#created");
    this.NoContent = this.page.locator("#no-content");
    this.Moved = this.page.locator("#moved");
    this.BadRequest = this.page.locator("#bad-request");
    this.Unauthorized = this.page.locator("#unauthorized");
    this.Forbidden = this.page.locator("#forbidden");
    this.NotFound = this.page.locator("#invalid-url");
    this.LinkResponse = this.page.locator("#linkResponse");
    this.CreatedResponseText = "201";
    this.NoContentResponseText = "204";
    this.MovedResponseText = "301";
    this.BadRequestResponseText = "400";
    this.UnauthorizedResponseText = "401";
    this.ForbiddenResponseText = "403";
    this.NotFoundResponseText = "404";
    this.CreatedURL = "created";
    this.NoContentURL = "no-content";
    this.MovedURL = "moved";
    this.BadRequestURL = "bad-request";
    this.UnauthorizedURL = "unauthorized";
    this.ForbiddenURL = "forbidden";
    this.NotFoundURL = "invalid-url";
  }

  async openPageLinks() {
    await this.PageLinks.click();
  }

  // This method clicks on a link and waits for a new tab to open, then returns the new tab's page object.
  async clickLinkAndGetNewTab(linkLocator: Locator): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      linkLocator.click(),
    ]);
    await newPage.waitForLoadState("domcontentloaded");
    return newPage;
  }
  //this uses clickLinkAndGetNewTab on the SimpleLink locator and returns the new page
  async clickSimpleLinkAndGetNewTab(): Promise<Page> {
    return this.clickLinkAndGetNewTab(this.SimpleLink);
  }
  //this uses clickLinkAndGetNewTab on the DynamicLink locator and returns the new page
  async clickDynamicLinkAndGetNewTab(): Promise<Page> {
    return this.clickLinkAndGetNewTab(this.DynamicLink);
  }
  // This method uses Playwright's `expect` to verify the URL of the new page.
  async verifyURL(_newPage: Page, expectedURL: string): Promise<boolean> {
    try {
      await expect(_newPage).toHaveURL(expectedURL);
      return true;
    } catch (error) {
      return false;
    }
  }

  /*   This is a more "complex" example of a method that uses the above methods to perform a series of actions.


     async xxx(linkLocator: Locator) {
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      linkLocator.click(),
    ]);
    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
  }
  async yyy() {
    await expect(await this.xxx(this.SimpleLink)).toHaveURL(this.expectedURL);

  }

  async zzz() {
    await expect(await this.xxx(this.DynamicLink)).toHaveURL(this.expectedURL);

  }

  async zzxz(linkLocator: Locator, expectedURL: string) {
    await expect(await this.xxx(linkLocator)).toHaveURL(expectedURL);

  } */
  async getfulfilledResponse(page: Page, url: string) {
    return page.waitForResponse(url);
  }

  async clickCreatedLink() {
    await this.Created.click();
  }
  async verifycreatedrstatus201(response: any) {
    expect(response.status()).toBe(201);
  }

  async clickNoContentLink() {
    await this.NoContent.click();
  }
  async verifynocontentStatus204(response: any) {
    expect(response.status()).toBe(204);
  }

  async clickMovedLink() {
    await this.Moved.click();
  }
  async verifymovedStatus301(response: any) {
    expect(response.status()).toBe(301);
  }

  async clickBadRequestLink() {
    await this.BadRequest.click();
  }
  async verifybadrequestStatus400(response: any) {
    expect(response.status()).toBe(400);
  }

  async clickUnauthorizedLink() {
    await this.Unauthorized.click();
  }
  async verifyunauthorizedStatus401(response: any) {
    expect(response.status()).toBe(401);
  }

  async clickForbiddenLink() {
    await this.Forbidden.click();
  }
  async verifyforbiddenStatus403(response: any) {
    expect(response.status()).toBe(403);
  }

  async clickNotFoundLink() {
    await this.NotFound.click();
  }
  async verifynotfoundStatus404(response: any) {
    expect(response.status()).toBe(404);
  }

  async verifylinkResponseText(linkResponsetext: string) {
    await expect(this.LinkResponse).toContainText(linkResponsetext);
  }
}
