export class User {
  constructor(username) {
    this.username = username;
  }

  greet() {
    return `Hello, I am ${this.username}!`;
  }
}
