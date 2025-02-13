import { expect, Locator, Page } from '@playwright/test';




export class DynamicProperties{
    readonly page: Page;
    readonly DynamicPropertiesPage: Locator;
    readonly RandomID: Locator;
    readonly ButtonEnable5kMS: Locator;
    readonly ButtonColorChange: Locator;
    readonly ButtonVisible5kMS: Locator;



    


    constructor(page: Page) {
        this.page = page;
        this.DynamicPropertiesPage = page.getByText('Dynamic Properties');
        this.RandomID = page.getByText('This text has random Id');
        this.ButtonEnable5kMS = page.getByRole('button', { name: 'Will enable 5 seconds' });
        this.ButtonColorChange = page.getByRole('button', { name: 'Color Change' });
        this.ButtonVisible5kMS = page.getByRole('button', { name: 'Visible After 5 Seconds' })





    }
    
    async dynamicPropertiesPage(){
        await this.DynamicPropertiesPage.click();
    }

    async getRandomID(){
        const randomid = await this.RandomID.getAttribute('id');
        console.log('Random ID is: ' + randomid);
        return randomid;
    }

    async reloadPage(){
        await this.page.reload();
    }

    async randomIDNotMatch(getrandomid: string){

        const newrandomid = await this.RandomID.getAttribute('id');
        expect(newrandomid).not.toMatch(getrandomid);
    }
}