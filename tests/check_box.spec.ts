import assert from 'assert';
import { test} from '../fixtures/fixtures';
import { expect } from '@playwright/test';


test('Checkbox expand all', async ({ checkboxpage, page }) => {
    await checkboxpage.checkboxpagebutton()
    await checkboxpage.expandallbutton()
    const locator = page.locator('//*[@id="tree-node"]/ol/li')
    await expect(locator).toHaveClass('rct-node rct-node-parent rct-node-expanded')
})

test('Checkbox collaped all', async ({ checkboxpage, page }) => {
    await checkboxpage.checkboxpagebutton()
    await checkboxpage.expandallbutton()
    await checkboxpage.collapseallbutton()
    const locator = page.locator('//*[@id="tree-node"]/ol/li')
    await page.locator('//*[@id="tree-node"]/ol/li').waitFor( {timeout: 10000});
    await expect(locator).toHaveClass('rct-node rct-node-parent rct-node-collapsed')

})

test('Toggle open/close folders', async ({ checkboxpage, page }) => {
    await checkboxpage.checkboxpagebutton()
    await expect(checkboxpage.ToggleDesktopFolder).toBeHidden()
    await checkboxpage.ToggleHomeFolder.click()
    await expect(checkboxpage.ToggleDesktopFolder).toBeVisible()
    await checkboxpage.ToggleHomeFolder.click()
    await expect(checkboxpage.ToggleDesktopFolder).toBeHidden()

})

test.only('Parent folder toggling does not affect child folder state', async ({ checkboxpage }) => {
    await checkboxpage.checkboxpagebutton()
    await checkboxpage.ToggleHomeFolder.click()
    await checkboxpage.ToggleDesktopFolder.click()
    await expect(checkboxpage.FileNotes).toBeVisible()
    await checkboxpage.ToggleHomeFolder.click()
    await expect(checkboxpage.FileNotes).toBeHidden()
    await checkboxpage.ToggleHomeFolder.click()
    await expect(checkboxpage.FileNotes).toBeVisible()

})




