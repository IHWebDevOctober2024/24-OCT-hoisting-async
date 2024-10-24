console.clear();

// Challenge 1
let foo = "abc";

function bar() {
  // let foo = "xyz" // here we are shadowing the other variable
  foo = "xyz"; // we are changing the value
  console.log(foo); // xyz
}

bar();

console.log(foo); // ?????

console.log("------------------CHALLENGE 2 -----------------------");

// Challenge 2
let a = 1;

function example(a) {
  a = 10;
  console.log("CONSOLE LOG 1: ", a); // 10
}

example(a);

console.log("CONSOLE LOG 2: ", a); // 1

console.log("------------------CHALLENGE 3 -----------------------");

sayHi(); // it works because of hoisting

function sayHi() {
  console.log("Hi there!");
}

console.log("------------------CHALLENGE 4 -----------------------");

const c = { num: 42 };
const b = c;

b.num = 90;

console.log(c); // {num: 90}

console.log("------------------CHALLENGE 5 -----------------------");

function magicHat(obj) {
  // here obj is the reference of {name: "Bob", age:30}
  obj.age = 10; // here this object is now {name: "Bob", age:10}
  // here we are not referencing the object  {name: "Bob", age:10} anymore
  obj = { name: "Ada", age: 20 };
  // we loose the reference when we change the value of the variable
  // this variable has now a reference to a new object
  return obj; // { name: "Ada", age: 20 };
}

const rabbit1 = { name: "Bob", age: 30 };

const rabbit2 = magicHat(rabbit1); // { name: "Ada", age: 20 };

console.log("rabbit1: ", rabbit1); // {name: "Bob", age:10? }
console.log("rabbit2: ", rabbit2); // { name: "Ada", age: 20 };

/*
What will be the output of the code above? Why?
a) { name: "Bob", age: 30 } and { name: "Ada", age: 20 }
b) { name: "Bob", age: 30 } and { name: "Bob", age: 10 }
c) { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
d) ReferenceError: obj is not defined

*/

const obj = { name: "Mica" };

console.log(obj);

function changeObject(ditto) {
  ditto.name = "Oriol";

  ditto = 33776736543;

  console.log(ditto);
}

changeObject(obj);

console.log(obj);
