import { CheckBoxPage } from "../POM/Elements/CheckBox";
import { TextBox } from "../POM/Elements/Textbox";
import { HomePage } from "../POM/Elements/HomePage";
import { RadioButton } from "../POM/Elements/RadioButton";

import { test as base } from "@playwright/test";

type test = {
  checkboxpage: CheckBoxPage;
  textbox: TextBox;
  homepage: HomePage;
  radiobutton: RadioButton
  forEachTest: void;
};

export const test = base.extend<test>({
  textbox: async ({ page }, use) => {
    await use(new TextBox(page));
  },

  checkboxpage: async ({ page }, use) => {
    await use(new CheckBoxPage(page));
  },

  homepage: async ({ page }, use) => {
    const homepage = new HomePage(page);
    await use(homepage);
    
  },
  
  radiobutton: async ({ page, radiobutton }, use) => {
    await use(new RadioButton(page));
    await radiobutton.radiobuttonpage()
    
  },

  forEachTest: [ async ({ page, homepage }, use) => {
      // This code runs before every test.

      await homepage.goto();
      await homepage.elementspage();
      await use();

      // This code runs after every test.
      console.log("Last URL:", page.url());
    },
    { auto: true },
  ], // automatically starts for every test.
});
