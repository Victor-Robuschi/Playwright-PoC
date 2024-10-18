import { expect, Locator, Page } from '@playwright/test';
/*

async xxx() {
    
} 

*/

export class CheckBoxPage{
    readonly page: Page;
    readonly CheckBoxPageButton: Locator;
    readonly ToggleButton: Locator;
    readonly ExpandAllButton: Locator;
    readonly CollapseAllButton: Locator;
    readonly ToggleHomeFolder: Locator;
    readonly ToggleDesktopFolder: Locator;
    readonly ToggleDocumentsFolder: Locator;
    readonly ToggleDownloadsFolder: Locator;
    readonly CheckHome: Locator;
    readonly CheckDesktop: Locator;
    readonly CheckDocuments: Locator;
    readonly CheckDownloads: Locator;
    readonly FileNotes : Locator

    constructor(page: Page) {
        this.page = page;
        this.CheckBoxPageButton = page.locator('span').filter({ hasText: 'Check Box' })
        this.ToggleButton = page.getByLabel('Toggle')
        this.ExpandAllButton = page.getByLabel('Expand all')
        this.CollapseAllButton = page.getByLabel('Collapse all')
        this.ToggleHomeFolder = page.getByLabel('Toggle').first()
        this.ToggleDesktopFolder = page.locator('li').filter({ hasText: /^Desktop$/ }).getByLabel('Toggle')
        this.ToggleDocumentsFolder = page.locator('li').filter({ hasText: /^Documents$/ }).getByLabel('Toggle')
        this.ToggleDownloadsFolder = page.locator('li').filter({ hasText: /^Downloads$/ }).getByLabel('Toggle')
        this.FileNotes = page.locator('label').filter({ hasText: 'Notes' }).locator('span').first()
  }


  async checkboxpagebutton() {
    await this.CheckBoxPageButton.click()
  } 

  async expandallbutton() {
    await this.ExpandAllButton.click()
  } 

  async collapseallbutton() {
    await this.CollapseAllButton.click()
  } 
}