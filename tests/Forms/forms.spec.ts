import { test } from "../../fixtures/fixtures";
import { expect } from "@playwright/test";


test('Fill the form correctly', async ({ forms }) => {
    await forms.gotoFormsPage();
    await forms.fillTextForm();
    await forms.selectGender(forms.Male);
    await forms.dateOfBirth();
    await forms.selectSubjects();
    await forms.selectHobbies();
    await forms.uploadPicture();
    await forms.selectState();
    await forms.Submit.click();
    await expect(forms.SubmitResult).toHaveScreenshot("FinalForm.png");
    await expect(forms.SubmitDialog).toHaveText(/Thanks for submitting the form/);
    await forms.pressEsc();
    await expect(forms.UserForm).toHaveScreenshot("UserForm.png");
    await expect(forms.UserForm).toHaveScreenshot('FormCleared.png');
    
})

test('Fill in the form incorrectly', async ({ forms }) => {
    await forms.gotoFormsPage();
    await forms.Submit.click();
    await expect(forms.UserForm).toHaveScreenshot("errorForm.png");
})
