import { CheckBoxPage } from "../POM/Elements/CheckBox";
import { TextBox } from "../POM/Elements/Textbox";
import { HomePage } from "../POM/Elements/HomePage";
import { RadioButton } from "../POM/Elements/RadioButton";
import { test as base, Browser, Locator, Page } from "@playwright/test";
import { WebTable } from "../POM/Elements/WebTable";
import { Buttons } from "../POM/Elements/Buttons";
import { Links } from "../POM/Elements/Links";
import { UpDownLoad } from "../POM/Elements/UpDownLoad";
import { DynamicProperties } from "../POM/Elements/DyProp";
import { Forms } from "../POM/Forms/Forms";

type test = {
  checkboxpage: CheckBoxPage;
  textbox: TextBox;
  homepage: HomePage;
  radiobutton: RadioButton;
  webtable : WebTable;
  buttons: Buttons;
  links: Links;
  updownload: UpDownLoad
  dynamicproperties: DynamicProperties;
  forms: Forms;
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
  
  radiobutton: async ({ page }, use) => {
    await use(new RadioButton(page));
  },

  webtable: async ({ page }, use) => {
    await use(new WebTable(page));
  },
  
  buttons: async ({ page }, use) => {
    await use(new Buttons(page));
  },

  links: async ({ page }, use) => {
    await use(new Links(page));
  },

  updownload: async ({ page }, use) => {
    await use(new UpDownLoad(page));
  },

  dynamicproperties: async ({ page }, use) => {
    await use(new DynamicProperties(page));
  },

  forms: async ({ page }, use) => {
    await use(new Forms(page));
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


export async function repeatAction(action: () => Promise<void>, times: number): Promise<void> {
  for (let i = 0; i < times; i++) {
    await action();
  }
}

/* export async function clickLinkAndGetNewTab(page: Page, linkLocator: Locator): Promise<Page> {
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      linkLocator.click(),
    ]);
    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
  } */