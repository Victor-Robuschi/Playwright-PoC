import { expect, Locator, Page } from "@playwright/test";

export class Alerts {
  readonly page: Page;
  readonly AlertsPage: Locator;
  readonly AlertButton: Locator;
  readonly AlertTimerButton: Locator;
  readonly AlertConfirmationBoxButton: Locator;
  readonly AlertPromptBoxButton: Locator;
  readonly PromtResult: Locator;
  readonly ConfirmResultLocator: Locator;
  readonly ConfirmResultOK: string;
  readonly ConfirmResultCancel: string;
  readonly AlertButtonMessage: string;
  readonly PromtInputText: string;
  readonly PromtMessage: string;
  readonly AlertTimerMessage: string;
  readonly ConfirmMessage: string;
  readonly DialogTypeAlert: string;
  readonly DialogTypePromt: string;
  readonly DialogTypeConfirm: string;
  readonly TextNull: string;



  constructor(page: Page) {
    this.page = page;
    this.AlertsPage = page.getByRole('list').getByText('Alerts')
    this.AlertButton = page.locator('#alertButton')
    this.AlertTimerButton = page.locator('#timerAlertButton')
    this.AlertConfirmationBoxButton = page.locator('#confirmButton')
    this.AlertPromptBoxButton = page.locator('#promtButton')
    this.PromtResult = page.locator('#promptResult')
    this.ConfirmResultLocator = page.locator('#confirmResult')
    this.ConfirmResultOK = 'You selected Ok'
    this.ConfirmResultCancel = 'You selected Cancel'
    this.PromtInputText = 'Test'
    this.TextNull = ''
    this.PromtMessage = 'Please enter your name'
    this.AlertTimerMessage = 'This alert appeared after 5 seconds'
    this.ConfirmMessage = 'Do you confirm action?'
    this.AlertButtonMessage = 'You clicked a button'
    this.DialogTypeAlert = 'alert'
    this.DialogTypePromt = 'prompt'
    this.DialogTypeConfirm = 'confirm'


    
  }

  async dialogBoxDismiss(type: string, message: string) {
    this.page.on('dialog', dialog => {
      console.log(dialog.type());
      console.log(dialog.message());
      expect(dialog.type()).toBe(type);
      expect(dialog.message()).toBe(message);
      dialog.dismiss()
    } );
  }

  async dialogAccept(input: string, type: string, message: string) {
    this.page.on('dialog', dialog => {
      console.log(dialog.type());
      console.log(dialog.message());
      expect(dialog.type()).toBe(type);
      expect(dialog.message()).toBe(message);
      dialog.accept(input)
    } );
  }




}
