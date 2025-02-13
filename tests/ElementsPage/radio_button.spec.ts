import { test} from '../../fixtures/fixtures';



test('Selects Radio Button-Yes on Click', async ({ radiobutton }) => {
    await radiobutton.radiobuttonpage()
    await radiobutton.radio_yes()
    await radiobutton.assertTextIs("Yes")


})

test('Selects Radio Button-Impressive on Click', async ({ radiobutton }) => {
    await radiobutton.radiobuttonpage()
    await radiobutton.radio_impressive()
    await radiobutton.assertTextIs("Impressive")


})
