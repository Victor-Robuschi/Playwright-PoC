import { expect, Locator, Page } from "@playwright/test";

export class Forms {
  readonly page: Page;
  readonly UserForm: Locator;
  readonly FormPager: Locator;
  readonly NameFirst: Locator;
  readonly NameLast: Locator;
  readonly Email: Locator;
  readonly Male: Locator;
  readonly Female: Locator;
  readonly Other: Locator;
  readonly Mobile: Locator;
  readonly DateOfBirth: Locator;
  readonly Subjects: Locator;
  readonly Sports: Locator;
  readonly Reading: Locator;
  readonly Music: Locator;
  readonly UpLoadPicture: Locator;
  readonly CurrentAddress: Locator;
  readonly State: Locator;
  readonly City: Locator;
  readonly Submit: Locator;
  readonly SubmitDialog: Locator;
  readonly SubmitResult: Locator;
  readonly PressCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.UserForm = page.locator("#userForm");
    this.FormPager = page.getByText("Practice Form");
    this.NameFirst = page.locator("#firstName");
    this.NameLast = page.locator("#lastName");
    this.Email = page.locator("#userEmail");
    this.Male = page.getByText('Male', { exact: true });
    this.Female = page.locator("#gender-radio-2");
    this.Other = page.locator("#gender-radio-3");
    this.Mobile = page.locator("#userNumber");
    this.DateOfBirth = page.locator("#dateOfBirthInput");
    this.Subjects = page.locator("#subjectsInput");
    this.Sports = page.getByText('Sports');
    this.Reading = page.getByText('Reading');
    this.Music = page.locator("#hobbies-checkbox-3");
    this.UpLoadPicture = page.locator("#uploadPicture");
    this.CurrentAddress = page.locator("#currentAddress");
    this.State = page.getByText('Select State');
    this.City = page.getByText('Select City');
    this.Submit = page.locator("#submit");
    this.SubmitDialog = page.locator("[class=modal-content]");
    this.SubmitResult = page.locator("[class=modal-body]");
    this.PressCloseButton = page.getByRole('button', { name: 'Close' });
    
  }

  async gotoFormsPage() {
    await this.page.getByText("Forms").click();
    await this.FormPager.click();
  }

  async fillTextForm() {
    await this.NameFirst.fill("John");
    await this.NameLast.fill("Smith");
    await this.Email.fill("john.smith@test.com");
    await this.Mobile.fill("1234567890");
    await this.CurrentAddress.fill("1234 Main St, Anytown, USA");
  }

  async selectGender(gender: Locator) {
    await gender.click();
  }

  async dateOfBirth() {
    await this.DateOfBirth.click();
    await this.page.locator(".react-datepicker__month-select").selectOption("June");
    await this.page.locator(".react-datepicker__year-select").selectOption("1990");
    await this.page.locator('[class="react-datepicker__day react-datepicker__day--001"]').click();
  }

  async selectSubjects() {
    await this.Subjects.fill("Ma");
    await this.page.getByText("Maths", { exact: true }).click();
    await this.Subjects.fill("Ph");
    await this.page.getByText("Physics", { exact: true }).click();
  }

  async selectHobbies() {
    await this.Sports.click();
    await this.Reading.click();
  }

  async uploadPicture() {
    await this.UpLoadPicture.setInputFiles("C:/Users/VictorRobuschi/Playwright PoC/tests/ElementsPage/upload/crash-testing-dummies1.jpg");
  }

  async selectState() {
    await this.State.click();
    await this.page.getByText("NCR", {exact: true}).click();
    await this.City.click();
    await this.page.getByText("Delhi", {exact: true}).click();
  }

  async pressEsc() {
    await this.page.getByLabel('Thanks for submitting the form').press('Escape');
  }


}
