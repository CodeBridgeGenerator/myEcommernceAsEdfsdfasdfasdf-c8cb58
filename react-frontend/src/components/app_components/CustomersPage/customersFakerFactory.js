
import { faker } from "@faker-js/faker";
export default (user,count,userIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(""),
userId: userIdIds[i % userIdIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
