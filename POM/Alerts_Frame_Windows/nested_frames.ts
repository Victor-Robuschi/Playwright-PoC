import { expect, Locator, Page } from "@playwright/test";

export class NestedFrames {
  readonly page: Page;
  readonly NestedFramesPage: Locator;
  readonly ParentFrame: Locator;
  readonly ChildFrame: Locator;
  readonly ParentFrameText: string;
  readonly ChildFrameText: string;



  constructor(page: Page) {
    this.page = page;
    this.NestedFramesPage = page.getByText('Nested Frames');
    this.ParentFrame = page.frameLocator('#frame1').getByText('Parent frame')
    this.ChildFrame = page.locator('#frame1').contentFrame().locator('iframe').contentFrame().getByText('Child Iframe')
    this.ParentFrameText = 'Parent frame'
    this.ChildFrameText = 'Child Iframe'



    
  }

  async verifyParentFrame() {
    await expect(this.ParentFrame).toContainText(this.ParentFrameText);

  }

  async verifyChildFrame() {
    await expect(this.ChildFrame).toContainText(this.ChildFrameText);

  }


}
