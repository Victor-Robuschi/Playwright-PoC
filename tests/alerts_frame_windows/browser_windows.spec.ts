import { expect } from "@playwright/test";
import { test } from "../../fixtures/alfrwin_fixture";
import exp from "constants";


/* test.skip('test', async ({ browserwindows }) => {
    await browserwindows.BrowserWindowsPage.click();
    const newTab = browserwindows.page.waitForEvent('popup');
    await browserwindows.NewTab.click();
    await expect((await newTab).getByRole('heading', { name: 'This is a sample page' })).toBeVisible();    
}) */

test('open tab', async ({ browserwindows }) => {
    await browserwindows.BrowserWindowsPage.click();
    const newTab = await browserwindows.clickAndGetNewWindow(browserwindows.NewTab);
    await browserwindows.verifyTextNewWindow(newTab, browserwindows.NewWindowExpectedText);
})

test('open window', async ({ browserwindows }) => {
    await browserwindows.BrowserWindowsPage.click();
    const newWindow = await browserwindows.clickButtonAndGetNewTab(browserwindows.NewWindow);
    await browserwindows.verifyTextNewWindow(newWindow, browserwindows.NewWindowExpectedText);
})

test('open new window message', async ({ browserwindows }) => {
    await browserwindows.BrowserWindowsPage.click();
    const newWindow = await browserwindows.clickAndGetNewWindow(browserwindows.NewWindowMessage);
    await browserwindows.verifyTextNewWindow(newWindow, browserwindows.NewWindowMessageExpectedText);
})


