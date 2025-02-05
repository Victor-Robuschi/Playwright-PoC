import { expect } from "@playwright/test";
import { test, repeatAction } from "../fixtures/fixtures";
import { testEntries } from "../testdata/test-data";

test("webtable X", async ({ webtable }) => {
  await webtable.webtablepagebutton();
  await webtable.RowSelector.selectOption({ index: 2 }); //This selects how many row i want in the web table
  await webtable.ZZZ(); //This outputs, in the browser console, the amount of rows([class=rt-tr-group]) in the web table.
  await expect(webtable.table).toHaveCount(20); //This checkes the amount of [class=rt-tr-group] there is and that should correlate to the amount of rows in the web table
});

test("search", async ({ webtable }) =>{
  await webtable.webtablepagebutton();
  await webtable.SerchBox.fill("GE")
  await webtable.verifyFirstRowContainsText('Gentry')
});

test("Delete", async ({ webtable }) =>{
  await webtable.webtablepagebutton();
  await repeatAction(() => webtable.deletebutton(), 2);
  await webtable.verifyFirstRowContainsText('Gentry')
});

test("Pagination", async ({ webtable }) => {
  await webtable.webtablepagebutton();

  // Populate the web table with entries
  await webtable.populateWithTestEntries(testEntries);
  await webtable.RowSelector.selectOption({ index: 0 }); //This selects how many row i want in the web table

  // Click the next pagination button and assert the page number
  await webtable.PaginationButtonNext.click();
  await expect(webtable.PageJump).toHaveValue('2');

  // Click the previous pagination button and assert the page number
  await webtable.PaginationButtonPrevious.click();
  await expect(webtable.PageJump).toHaveValue('1');
});

test("Add single entry and verify", async ({ webtable }) => {
  await webtable.webtablepagebutton();

  // Add a single entry from test data
  const singleEntry = testEntries[0];
  await webtable.addSingleEntry(singleEntry);

  // Search for the entry added to the web table
  await webtable.SerchBox.fill(singleEntry.firstName);

  // Verify the entry has been added
  await webtable.verifyFirstRowContainsText(singleEntry.firstName);
  await webtable.verifyFirstRowContainsText(singleEntry.lastName);
  await webtable.verifyFirstRowContainsText(singleEntry.email);
  await webtable.verifyFirstRowContainsText(singleEntry.age);
  await webtable.verifyFirstRowContainsText(singleEntry.salary);
  await webtable.verifyFirstRowContainsText(singleEntry.department);
});

test("Edit first entry and verify", async ({ webtable }) => {
  await webtable.webtablepagebutton();

  // Edit the first entry
  const newFirstName = "NewFirstName";
  const newLastName = "NewLastName";
  await webtable.editFirstEntry(newFirstName, newLastName);

  // Verify the entry has been edited
  await webtable.verifyFirstRowContainsText(newFirstName);
  await webtable.verifyFirstRowContainsText(newLastName);
});

test("Add invalid entry and verify screenshot", async ({ webtable }) => {
  await webtable.webtablepagebutton();

  // Add an invalid entry
  await webtable.addInvalidEntry();

  // Take a screenshot after attempting to add an invalid entry
  await expect(webtable.UserForm).toHaveScreenshot('invalid-entry.png');
 
});

test("Edit entry with incorrect email, age and salary format", async ({ webtable }) => {
  await webtable.webtablepagebutton();

  // Add a single entry from test data
  await webtable.addSingleEntry({ firstName: 'John', lastName: 'Doe', email: 'x@x', age: 'three zero', salary: 'fifty thousand', department: 'IT' });

  // Take a screenshot after attempting to add an entry with an incorrect email format
  await expect(webtable.UserForm).toHaveScreenshot('invalid-format-email-age-salary.png');

});