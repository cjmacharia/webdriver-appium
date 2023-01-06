import { faker } from '@faker-js/faker';
export default {
    firstName: faker.name.firstName(),
    email: faker.internet.email(),
    lastName: faker.name.firstName(),
    phone: faker.phone.phoneNumber('+254- ### ## ##'),
    otherPhoneNumber: faker.phone.phoneNumber('+48-### ## ##')
};