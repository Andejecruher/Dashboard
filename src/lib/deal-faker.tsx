// ESM
import { faker } from '@faker-js/faker';

export function createRandomDeal() {
    return {
        id: faker.string.uuid(),
        address: faker.address.streetAddress(),
        price: faker.finance.amount(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        dateTime: faker.date.between({ from: "2021-01-01", to: "2021-12-31" }).toDateString(),
        imageUrl: faker.image.url(),
        roomArea: faker.number.int({ min: 100, max: 1000 }),
        status: ["IN PROGRESS", "CLOSED"][faker.number.int({ min: 0, max: 1 })],
    };
}

export const deals = faker.helpers.multiple(createRandomDeal, {
    count: 20,
});