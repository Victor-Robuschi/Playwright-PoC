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
    this.PageRadioButton = page.getByRole('list').getByText('Radio Button')
    //this.PageRadioButton = page.locator('li').filter({ hasText: 'Radio Button' })
    //this.RadioYesButton = page.locator('div').filter({ hasText: /^Yes$/ })
    this.RadioYesButton = page.locator('id=yesRadio')
    //this.RadioImpressiveButton = page.locator('label').filter({ hasText: 'Impressive' })
    this.RadioImpressiveButton = page.locator('id=impressiveRadio')
    this.RadioNoButton = page.locator('div').filter({ hasText: /^No$/ })
    this.TextSuccess = page.locator('.text-success');
  }



  async radiobuttonpage() {
    await this.PageRadioButton.click();
  }
  
  async radio_yes() {
    await this.RadioYesButton.click({force: true});
  }

  async radio_impressive() {
    await this.RadioImpressiveButton.click({force: true});
  }

  async assertTextIs(expectedText: string) {
    await expect(this.TextSuccess).toHaveText(expectedText, { timeout: 600 });
  }

}