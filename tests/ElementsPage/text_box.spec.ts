import { expect } from '@playwright/test';
import { test} from '../../fixtures/fixtures';




/* const test = base.extend<{ textbox: textbox }>({
  textbox: async ({ page }, use) => {
    const textbox = new textbox(page);
    await textbox.goto();
    await textbox.elements();
    await use(textbox)    

  },
}); */


test('Text Box', async ({ textbox }) => {

 await textbox.textboxbutton()
 await textbox.fullnameinput('Victor Robuschi')
 await textbox.emailinput('victor.robuschi@test.com')
 await textbox.currentadressinput('Teststreet 123')
 await textbox.permanetaddressinput('AwsomeStreet 321')
 await textbox.confirminformation()
 await expect(textbox.InformationOutput).toContainText('Name:Victor RobuschiEmail:victor.robuschi@test.comCurrent Address :Teststreet 123 Permananet Address :AwsomeStreet 321')

});