// 1. Destructuring Array
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // Output: 1 2 3

// 2. Destructuring Object
const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name, age); // Output: Alice 25

// 3. Destructuring Array with Partial Items
const colors = ['red', 'green', 'blue', 'yellow'];
const [, secondColor, thirdColor] = colors;
console.log(secondColor, thirdColor); // Output: green blue

// 4. Destructuring Object with Partial Properties
const user = { firstName: 'John', lastName: 'Doe', age: 30 };
const { firstName } = user;
console.log(firstName); // Output: John

// 5. Destructuring Array with Default Value
const numbers2 = [1];
const [a2, b2 = 10] = numbers2;
console.log(a2, b2); // Output: 1 10

// 6. Destructuring Object with Default Value
const person2 = { name: 'Alice' };
const { name: name2, age: age2 = 25 } = person2;
console.log(name2, age2); // Output: Alice 25

// 7. Destructuring Array with Rest Operator
const numbers3 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers3;
console.log(first, second, rest); // Output: 1 2 [3, 4, 5]

// 8. Destructuring Object with Rest Operator
const user2 = { firstName: 'John', lastName: 'Doe', age: 30 };
const { firstName: firstName2, ...rest2 } = user2;
console.log(firstName2, rest2); // Output: John { lastName: 'Doe', age: 30 }

//exercise 6 yang diubah ke destructuring.
// Refactor Example 1: yearUntilRetirement function
function calculateAge(birthYear) {
  return 2019 - birthYear;
}

function yearUntilRetirement({ year, firstName }) {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
}

yearUntilRetirement({ year: 1987, firstName: 'John' });

// Refactor Example 2: addNumber function
const addNumber = (...numbers) => {
  return numbers.reduce((sum, number) => sum + number, 0);
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7)); // Output: 28

// Refactor Example 3: calculateArea function
const phi = 3.14;

const calculateArea = ({ radius, power }) => {
  return phi * Math.pow(radius, power);
};

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// Refactor Example 4: makeAjaxRequest function
const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
};

makeAjaxRequest('www.google.com'); // Output: www.google.com GET
