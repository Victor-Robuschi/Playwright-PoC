import { test } from "../fixtures/fixtures";

test("dynamic click", async ({ buttons }) =>{
    await buttons.openPageButtons();
    await buttons.clickButton();
    await buttons.clickButtonResult();
  });

test("doubleclick", async ({ buttons }) =>{
    await buttons.openPageButtons();
    await buttons.doubleClickButton();
    await buttons.doubleClickButtonResult();
  });

test("rightclick", async ({ buttons }) =>{
    await buttons.openPageButtons();
    await buttons.rightClickButton();
    await buttons.rightClickButtonResult();
  });