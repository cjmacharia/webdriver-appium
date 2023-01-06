import AddContactScreen from '../../Screenobjects/contacts.js'
import data from '../../fixtures/data.js';
describe('Create contact', () => {
    it('Should be able to create a user contact ', async () => {
        await AddContactScreen.saveContact(data.firstName, data.lastName, data.email, data.phone, data.otherPhoneNumber)
        await expect(AddContactScreen.savedPhoneOne).toHaveText(data.phone)
        await expect(AddContactScreen.savedPhoneTwo).toHaveText(data.otherPhoneNumber)
        await expect(AddContactScreen.savedEmail).toHaveText(data.email)

    })
})

