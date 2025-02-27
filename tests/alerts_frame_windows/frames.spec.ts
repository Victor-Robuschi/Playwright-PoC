import { expect } from "playwright/test";
import { test } from "../../fixtures/alfrwin_fixture";

test('Big iframe', async ({ frames }) => {
    await frames.FramesPage.click()
    await expect(frames.page.locator('#frame1').contentFrame().locator('#sampleHeading')).toContainText('This is a sample page');
    
    /*  const frame1 = frames.page.frameLocator('#frame1')
        const frame1text = await frame1.locator('#sampleHeading').textContent();
        expect(frame1text).toContain('This is a sample page') */

})

test('Small iframe', async ({ frames }) => {
    await frames.FramesPage.click()
    await expect(frames.page.locator('#frame2').contentFrame().locator('#sampleHeading')).toContainText('This is a sample page');
    
/*  await frame2box.evaluate((node) => {
    const frame2 = frames.page.frameLocator('#frame2')
    const frame2box = frames.page.locator('#frame2')
        node.style.width = '300px'; // Set new width
        node.style.height = '200px'; // Set new height
    });

    const frame2text = await frame2.locator('#frame2').getByRole('heading', { name: 'This is a sample page' }).textContent();
    expect(frame2text).toContain('This is a sample page') 
*/


})

