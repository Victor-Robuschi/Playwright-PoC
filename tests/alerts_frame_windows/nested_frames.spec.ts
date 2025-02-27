import { test } from "../../fixtures/alfrwin_fixture";

test('Nested frames', async ({ nestedframes }) => {
    await nestedframes.NestedFramesPage.click()
    await nestedframes.verifyParentFrame()
    await nestedframes.verifyChildFrame()
})

