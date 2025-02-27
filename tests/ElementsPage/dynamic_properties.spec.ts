import { test } from "../../fixtures/fixtures";
import { expect } from "@playwright/test";


test('random id', async ({ dynamicproperties }) => {
    await dynamicproperties.dynamicPropertiesPage();
    
    //Save the random id in to a variable
    const getrandomid = await dynamicproperties.getRandomID();
    await dynamicproperties.reloadPage();
    
    //This is to check if the random id is not the same after reloading the page
    //And that the random id is not null
    if (getrandomid !== null) {
        await dynamicproperties.randomIDNotMatch(getrandomid);
      } else {
        console.error("getRandomID returned null");
      }
})

test('Button enables after 5 seconds', async ({ dynamicproperties }) => {
    await dynamicproperties.dynamicPropertiesPage();
    //This checks if the button is disabled
    await expect(dynamicproperties.ButtonEnable5kMS).toBeDisabled();
    //This checks if the button is enabled and playwright retries until it is enabled
    await expect(dynamicproperties.ButtonEnable5kMS).toBeEnabled({timeout: 6000});
})

test('Button text changes color', async ({ dynamicproperties }) => {
    await dynamicproperties.dynamicPropertiesPage();
    await expect(dynamicproperties.ButtonColorChange).toHaveCSS('color', 'rgb(255, 255, 255)');
    await expect(dynamicproperties.ButtonColorChange).toHaveCSS('color', 'rgb(220, 53, 69)', { timeout: 6000 });
})

test('Button visible after 5 seconds', async ({ dynamicproperties }) => {
    await dynamicproperties.dynamicPropertiesPage();
    await expect(dynamicproperties.ButtonVisible5kMS).not.toBeVisible();
    await expect(dynamicproperties.ButtonVisible5kMS).toBeVisible({ timeout: 6000 });
})


