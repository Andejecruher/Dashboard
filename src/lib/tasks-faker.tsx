// ESM
import { faker } from '@faker-js/faker';

export function createRandomTask() {
    return {
        id: faker.string.uuid(),
        title: faker.lorem.sentence(),
        isHighlighted: faker.datatype.boolean(),
        date: faker.date.between({ from: "2021-01-01", to: "2021-12-31" }).toDateString(),
    };
}

export const tasks = faker.helpers.multiple(createRandomTask, {
    count: 20,
});