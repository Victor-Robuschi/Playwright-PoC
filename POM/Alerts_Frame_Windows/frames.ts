import { expect, Locator, Page } from "@playwright/test";

export class Frames {
  readonly page: Page;
  readonly FramesPage: Locator;
  readonly Frame1Wrapper: Locator;
  readonly Frame2Wrapper: Locator;



  constructor(page: Page) {
    this.page = page;
    this.FramesPage = page.getByRole('list').getByText('Frames', {exact: true})
    this.Frame1Wrapper = page.locator('#frame1Wrapper')
    this.Frame2Wrapper = page.locator('#frame2Wrapper')


    
  }




}
