import { expect, Locator, Page } from '@playwright/test';




export class UpDownLoad{
    readonly page: Page;
    readonly UpDownLoadPageButton: Locator
    readonly DownloadButton: Locator
    readonly UploadButton: Locator
    readonly UploadPath: Locator
    readonly DownloadedFile: string


    


    constructor(page: Page) {
        this.page = page;
        this.UpDownLoadPageButton = page.getByRole('list').getByText('Upload and Download')
        this.DownloadButton = page.locator('#downloadButton')
        this.UploadButton = page.locator('#uploadFile')
        this.UploadPath = page.locator('#uploadedFilePath')
        this.DownloadedFile = 'sampleFile.jpeg'



    }

    async clickOnUpDownLoadPageButton() {
        await this.UpDownLoadPageButton.click()
    }

    async clickOnDownloadButton() {
        const downloadPromise = this.page.waitForEvent('download');
        await this.DownloadButton.click()
        const download = await downloadPromise;

        // Save the file, is not needed to verify the download
        //await download.saveAs('C:/Users/VictorRobuschi/Playwright PoC/tests/ElementsPage/download/' + download.suggestedFilename());
        return download
    }

    async verifydownloadedFile(downloadedfile: string) {
        const download = await this.clickOnDownloadButton();
        expect(download.suggestedFilename()).toBe(downloadedfile)
    }

    async clickOnUploadButton() {
        await this.UploadButton.setInputFiles('C:/Users/VictorRobuschi/Playwright PoC/tests/ElementsPage/upload/crash-testing-dummies1.jpg')
    }

    async verifyUploadedFile() {
        await expect(this.UploadPath).toHaveText(/crash-testing-dummies1.jpg/)
    }


      
}