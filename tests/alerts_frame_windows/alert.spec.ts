import { expect } from "@playwright/test";
import { test } from "../../fixtures/alfrwin_fixture";

test('diolog with alert', async ({ alerts }) => {
    await alerts.AlertsPage.click()
    alerts.dialogBoxDismiss(alerts.DialogTypeAlert, alerts.AlertButtonMessage);
    await alerts.AlertButton.click();
})

test('alert with delay, 5 sec', async ({ alerts }) => {
    await alerts.AlertsPage.click()
    alerts.dialogBoxDismiss(alerts.DialogTypeAlert, alerts.AlertTimerMessage);
    await alerts.AlertTimerButton.click();
    await alerts.page.waitForTimeout(5100);
})

test('alert with confirmation, cancel', async ({ alerts }) => {
    await alerts.AlertsPage.click()
    alerts.dialogBoxDismiss(alerts.DialogTypeConfirm, alerts.ConfirmMessage);
    await alerts.AlertConfirmationBoxButton.click();
    await expect(alerts.ConfirmResultLocator).toContainText(alerts.ConfirmResultCancel);
})

test('alert with confirmation, Ok', async ({ alerts }) => {
    await alerts.AlertsPage.click()
    alerts.dialogAccept(alerts.TextNull, alerts.DialogTypeConfirm, alerts.ConfirmMessage);
    await alerts.AlertConfirmationBoxButton.click();
    await expect(alerts.ConfirmResultLocator).toContainText(alerts.ConfirmResultOK);
})


test('diolog with promt', async ({ alerts }) => {
    await alerts.AlertsPage.click()
    alerts.dialogAccept(alerts.PromtInputText, alerts.DialogTypePromt, alerts.PromtMessage);
    await alerts.AlertPromptBoxButton.click();
    await expect(alerts.PromtResult).toContainText(alerts.PromtInputText);
})

