// ESM
import { faker } from '@faker-js/faker';

export function createRandomCostumer() {
    return {
        id: faker.string.uuid(),
        name: faker.internet.username(), // before version 9.1.0, use userName()
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        phone: faker.phone.number({ style: "national" }), // before version 9.1.0, use phoneNumber()
        address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.country()}`,
    };
}

export const costumers = faker.helpers.multiple(createRandomCostumer, {
    count: 20,
});