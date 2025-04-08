import { User } from "./user.js";
import { APP_VERSION, AUTHOR } from "./config.js";

const user1 = new User("Alice");
console.log(user1.greet()); // "Hello, I am Alice!"

const user2 = new User("Bob");
console.log(user2.greet()); // "Hello, I am Bob!"

console.log(`### App Version: ${APP_VERSION} - Created by: ${AUTHOR} ###`);
