import { test } from "../../fixtures/fixtures";

test('Download', async ({ updownload }) => {
    await updownload.clickOnUpDownLoadPageButton()
    await updownload.clickOnDownloadButton()
    await updownload.verifydownloadedFile(updownload.DownloadedFile)

})

test('Upload', async ({ updownload }) => {
    await updownload.clickOnUpDownLoadPageButton()
    await updownload.clickOnUploadButton()
    await updownload.verifyUploadedFile()

})