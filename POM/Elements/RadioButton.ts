import { expect, Locator, Page } from '@playwright/test';
/*

async xxx() {
    
} 

*/

export class RadioButton {
  readonly page: Page;
  readonly PageRadioButton : Locator;
  readonly RadioYesButton : Locator;
  readonly RadioImpressiveButton : Locator;
  readonly RadioNoButton : Locator;
  readonly TextSuccess : Locator
  


  constructor(page: Page) {
    this.page = page;
    this.PageRadioButton = page.locator('li').filter({ hasText: 'Radio Button' })
    this.RadioYesButton = page.locator('div').filter({ hasText: /^Yes$/ })
    this.RadioImpressiveButton = page.locator('label').filter({ hasText: 'Impressive' })
    this.RadioNoButton = page.locator('div').filter({ hasText: /^No$/ })
    this.TextSuccess = page.locator('.text-success');
  }



  async radiobuttonpage() {
    await this.PageRadioButton.click();
  }
  
  async radio_yes() {
    await this.RadioYesButton.click();
  }

  async radio_impressive() {
    await this.RadioImpressiveButton.click();
  }

  async assertTextIs(expectedText: string) {
    await expect(this.TextSuccess).toHaveText(expectedText);
  }

}