import { expect, Locator, Page } from '@playwright/test';

export class WebTable {
  readonly page: Page;
  readonly PageWebTable: Locator;
  readonly AddEntrie: Locator;
  readonly SerchBox: Locator;
  readonly SerchButton: Locator;
  readonly table: Locator;
  readonly RowSelector: Locator;
  readonly WebTable: Locator;
  readonly ActionButtons: Locator;
  readonly DeleteButton: Locator;
  readonly EditButton: Locator;
  readonly PaginationButtonNext: Locator;
  readonly PaginationButtonPrevious: Locator;
  readonly PageJump: Locator;
  readonly UserForm: Locator;
  readonly addButton = () => this.page.locator('#addNewRecordButton');
  readonly firstNameInput = () => this.page.locator('#firstName');
  readonly lastNameInput = () => this.page.locator('#lastName');
  readonly emailInput = () => this.page.locator('#userEmail');
  readonly ageInput = () => this.page.locator('#age');
  readonly salaryInput = () => this.page.locator('#salary');
  readonly departmentInput = () => this.page.locator('#department');
  readonly submitButton = () => this.page.locator('#submit');
  readonly errorMessage = () => this.page.locator('.error-message'); // Assuming there's a class for error messages

  constructor(page: Page) {
    this.page = page;
    this.PageWebTable = page.getByRole('list').getByText('Web Tables');
    this.AddEntrie = page.locator('#addNewRecordButton');
    this.SerchBox = page.locator('#searchBox');
    this.SerchButton = page.locator('#input-group-text');
    this.table = page.locator('[class=rt-tr-group]');
    this.RowSelector = page.getByLabel('rows per page');
    this.WebTable = page.locator("[class=rt-tbody]");
    this.ActionButtons = page.locator('.action-buttons');
    this.DeleteButton = page.locator('[title="Delete"]');
    this.EditButton = page.locator('[title="Edit"]');
    this.PaginationButtonNext = page.getByRole('button', { name: 'Next' });
    this.PaginationButtonPrevious = page.getByRole('button', { name: 'Previous' });
    this.PageJump = page.getByLabel('Jump to page');
    this.UserForm = page.locator('#userForm');
  }

  async webtablepagebutton() {
    await this.PageWebTable.click();
  }

  async deletebutton() {
    await this.DeleteButton.first().click();
  }

  async verifyFirstRowContainsText(expectedText: string) {
    const firstRow = this.table.locator('.rt-tr').first();
    const firstRowText = await firstRow.textContent();
    expect(firstRowText).toContain(expectedText);
  }

  async ZZZ() {
    const parentBody = await this.page.locator('[class=rt-tbody]');
    console.log(await parentBody.locator('[class=rt-tr-group]').count());
  }

  async addEntry(
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    salary: string,
    department: string
  ) {
    await this.addButton().click();
    await this.firstNameInput().fill(firstName);
    await this.lastNameInput().fill(lastName);
    await this.emailInput().fill(email);
    await this.ageInput().fill(age);
    await this.salaryInput().fill(salary);
    await this.departmentInput().fill(department);
    await this.submitButton().click();
    await this.page.waitForTimeout(500); // Use sparingly; prefer built-in waits
  }

  async populateWithTestEntries(testEntries: Array<{ firstName: string, lastName: string, email: string, age: string, salary: string, department: string }>) {
    for (const entry of testEntries) {
      await this.addEntry(
        entry.firstName,
        entry.lastName,
        entry.email,
        entry.age,
        entry.salary,
        entry.department
      );
    }
  }

  async addSingleEntry(entry: { firstName: string, lastName: string, email: string, age: string, salary: string, department: string }) {
    await this.addEntry(
      entry.firstName,
      entry.lastName,
      entry.email,
      entry.age,
      entry.salary,
      entry.department
    );
  }

  async editFirstEntry(newFirstName: string, newLastName: string) {
    await this.EditButton.first().click();
    await this.firstNameInput().fill(newFirstName);
    await this.lastNameInput().fill(newLastName);
    await this.submitButton().click();
    await this.page.waitForTimeout(500); // Use sparingly; prefer built-in waits
  }

  async addInvalidEntry() {
    await this.addButton().click();
    await this.submitButton().click();
  }

}
