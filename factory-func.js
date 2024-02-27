const User = (firstname, lastname) => ({
  firstname, 
  lastname,
  fullname (){
    return `${firstname} ${lastname}`
  }
});

const user1 = User('Hello1', 'World1');
const user2 = User('Hello2', 'World2');
console.log('user1 = ', user1.fullname())
console.log('user2 = ', user2.fullname())