class User {
  constructor(firstname, lastname){
    this.firstname = firstname
    this.lastname = lastname
  }

  fullname (){
    return `${this.firstname} ${this.lastname}`
  }
}

const user1 = new User('Hello1', 'World1');
const user2 = new User('Hello2', 'World2');

console.log('user1.fullname = ', user1.fullname())
console.log('user2.fullname = ', user2.fullname())