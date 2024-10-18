import { expect, Locator, Page } from '@playwright/test';
/*

async xxx() {
    
} 

*/

export class TextBox {
  readonly page: Page;
  readonly elementsbutton: Locator;
  readonly TextBoxButton: Locator;
  readonly FullnameInput: Locator;
  readonly EmailInput: Locator;
  readonly CurrentAddressInput: Locator;
  readonly PermamentAddressInput: Locator;
  readonly SubmitButton: Locator;
  readonly InformationOutput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.elementsbutton = page.getByRole('heading', { name: 'Elements' });
    this.TextBoxButton = page.locator('li').filter({ hasText: 'Text Box' });
    this.FullnameInput = page.getByPlaceholder('Full Name')
    this.EmailInput = page.getByPlaceholder('name@example.com')
    this.CurrentAddressInput = page.getByPlaceholder('Current Address')
    this.PermamentAddressInput = page.locator('#permanentAddress')
    this.SubmitButton = page.getByRole('button', { name: 'Submit' })
    this.InformationOutput = page.locator('#output')
  }



  async textboxbutton() {
    await this.TextBoxButton.click();
  }

  async fullnameinput(text: string) {
    await this.FullnameInput.fill(text);
  }

  async emailinput(text: string) {
    await this.EmailInput.fill(text)
  } 

  async currentadressinput(text: string) {
    await this.CurrentAddressInput.fill(text)
  }

  async permanetaddressinput(text: string) {
    await this.PermamentAddressInput.fill(text)
  }

  async confirminformation() {
    await this.SubmitButton.click()
  }
  
  async informationoutput(){
    await this.InformationOutput

  }


}