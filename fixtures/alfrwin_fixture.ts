import { HomePage } from "../POM/Elements/HomePage";
import { test as base, Browser, Locator, Page } from "@playwright/test";
import { BrowserWindows } from "../POM/Alerts_Frame_Windows/browser_windows";
import { Alerts } from "../POM/Alerts_Frame_Windows/alerts";
import { Frames } from "../POM/Alerts_Frame_Windows/frames";
import { ModialDialogs } from "../POM/Alerts_Frame_Windows/modal_dialogs";
import { NestedFrames } from "../POM/Alerts_Frame_Windows/nested_frames";

type test = {
  homepage: HomePage;
  alerts: Alerts;
  browserwindows: BrowserWindows;
  frames: Frames;
  modialdialogs: ModialDialogs;
  nestedframes: NestedFrames;
  forEachTest: void;
};

export const test = base.extend<test>({
  homepage: async ({ page }, use) => {
    const homepage = new HomePage(page);
    await use(homepage);
  },
  
  alerts: async ({ page }, use) => {
    await use(new Alerts(page));
  },

  browserwindows: async ({ page }, use) => {
    await use(new BrowserWindows(page));
  },
  
  frames: async ({ page }, use) => {
    await use(new Frames(page));
  },
  
  modialdialogs: async ({ page }, use) => {
    await use(new ModialDialogs(page));
  },
  
  nestedframes: async ({ page }, use) => {
    await use(new NestedFrames(page));
  },
  
  forEachTest: [ async ({ page, homepage }, use) => {
      // This code runs before every test.

      await homepage.goto();
      await homepage.AlFrWinPage();
      await use();

      // This code runs after every test.
      console.log("Last URL:", page.url());
    },
    { auto: true },
  ], // automatically starts for every test.

  
});

