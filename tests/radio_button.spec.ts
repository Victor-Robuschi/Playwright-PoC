import { test} from '../fixtures/fixtures';


test('Selects Radio Button-Yes on Click', async ({ radiobutton }) => {
    radiobutton.radio_yes()
    radiobutton.assertTextIs("Yes")


})

test('Selects Radio Button-Impressive on Click', async ({ radiobutton }) => {
    radiobutton.radio_impressive()
    radiobutton.assertTextIs("Impressive")


})
