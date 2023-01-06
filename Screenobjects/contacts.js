class AddContactScreen {
    get addContactEmptyState() {
        return $('id=com.android.dialer:id/empty_list_view_action')
    }
    get addContact() {
        return $('id=com.android.dialer:id/contact_name')
    }

    get firstName() {
        return $('//*[@text="First name"]')
    }
    get lastName() {
        return $('//*[@text="Last name"]')
    }
    get email() {
        return $('//*[@text="Email"]')
    }
    get emailSpinner() {
        return $('//android.widget.Spinner[@content-desc="Email"]')
    }
    get workButton() {
        return $('//*[@text="Work"]')
    }
    get phoneNumber() {
        return $('//android.widget.Spinner[@content-desc="Phone"]/preceding-sibling::android.widget.LinearLayout//android.widget.EditText')
    }
    get phoneSpinner() {
        return $('//android.widget.Spinner[@content-desc="Phone"]')
    }
    get otherButton() {
        return $('//*[@text="Other"]')
    }
    get phoneSpinnerTwo() {
        return $('(//android.widget.Spinner[@content-desc="Phone"])[2]')
    }

    get otherFax() {
        return $('//*[@text="Other Fax"]')
    }

    get phoneNumberTwo() {
        return $('(//android.widget.Spinner[@content-desc="Phone"]/preceding-sibling::android.widget.LinearLayout/android.widget.EditText)[2]')
    }

    get saveButton() {
        return $('id=com.android.contacts:id/editor_menu_save_button')
    }

    get savedPhoneOne() {
        return $('(//android.widget.TextView[@resource-id="com.android.contacts:id/header"])[1]')
    }
    get savedPhoneTwo() {
        return $('(//android.widget.TextView[@resource-id="com.android.contacts:id/header"])[2]')
    }

    get savedEmail() {
        return $('(//android.widget.TextView[@resource-id="com.android.contacts:id/header"])[3]')
    }

    async saveContact(firstName, lastName, email, phoneNumber,  otherPhoneNumber) {
         driver.startActivity('com.android.dialer', 'com.android.dialer.main.impl.MainActivity')
         const emptyState = await this.addContactEmptyState.isExisting()
        if (emptyState) {
            await this.addContactEmptyState.click()
        }  else {
            await this.addContact.click()
        }
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.email.setValue(email)
        await this.emailSpinner.click()
        await this.workButton.click()
        await this.phoneNumber.click()
        await this.phoneNumber.setValue(phoneNumber)
        await this.phoneSpinner.click()
        await this.otherButton.click()
        await this.phoneSpinnerTwo.click()
        await this.otherFax.click()
        await this.phoneNumberTwo.setValue(otherPhoneNumber)
        await this.saveButton.click()
    }


}

export default new AddContactScreen()