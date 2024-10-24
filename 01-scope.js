console.clear();
function sayHi() {
  const message = "Hello! Welcome to the campus!";

  console.log(message);
}
// console.log(message); // this is not working because the message variable is only available in the function scope

let index = 1000;

for (let index = 0; index < 10; index++) {
  // shadowing the index variable that was declared before
  console.log(index);
}

index += 10;

console.log("LAST INDEX: ", index); // 1010

// console.log(myName); // ERROR cannot access  myName before initialization

const myName = "Marcel";

// The process of reading the file before executing the lines of code is called hoisting
console.log(pmName); // undefined

var pmName = "Marina";

console.log(pmName); // marina

sendMessage("HELLOOOOOOOO");

function sendMessage(message) {
  console.log(message);
}

// if we want to avoid the hoisting and we want to have all the functions declared before using them we declare them inside variables

// sum(19, 21); // cannot access sum before initialization
const sum = (a, b) => {
  console.log(a + b);
};
