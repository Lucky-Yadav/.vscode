import { v4 as uuidv4 } from 'uuid';

const user1 = {
    name : "jack",
    id: uuidv4(),
};
const user2 = {
    name : "jill",
    id: uuidv4(),
};
const user3 = {
    name : "jeremy",
    id: uuidv4(),
};

console.log(user1,user2,user3)