import { expect, Locator, Page } from '@playwright/test';



export class HomePage{
    readonly page: Page;
    readonly elementsbutton: Locator;
    readonly ElementSpan: Locator;

    


    constructor(page: Page) {
        this.page = page;
        this.elementsbutton = page.getByRole('heading', { name: 'Elements' });
        this.ElementSpan = page.locator('span').filter({ hasText: 'Elements' }).locator('div').first();

    }

    async goto() {
        await this.page.goto('/');
      }
    
      async elementspage() {
        await this.elementsbutton.click();
        await expect(this.ElementSpan).toBeVisible();
      }
      
}