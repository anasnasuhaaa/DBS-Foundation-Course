// Destructuring Object
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const { firstName, lastName, age } = profile;
const {
  firstName: localFirstName,
  lastName: localLastName,
  age: localAge,
} = profile;

console.log(firstName);
console.log(localFirstName);

// Destructuring Array
const fruit = ["Aple", "Pineaple", "Banana", "Orange", "Grape"];
[fristFruit, secondFruit, thirdFruit, , fivthFruit] = fruit;
console.log(fristFruit, secondFruit, thirdFruit, fivthFruit);

// default value
const sliceFruit = fruit.slice(0, 2);
console.log(sliceFruit);
[fristFruit, secondFruit, thirdFruit = "JackFruit"] = sliceFruit;
console.log(thirdFruit);
