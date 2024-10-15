// 1. let & const, String Literals, Arrow Function, Default Parameter
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = (object) => {
  const age = calculateAge(object.year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(object.firstName + ' retires in ' + retirement + ' years');
  } else {
    console.log(object.firstName + ' is already retired.');
  }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2. Arrow Function & map function
const addNumber = (a, b, c, d, e, f, g) => {
  const numbers = [a, b, c, d, e, f, g];
  const sum = numbers.reduce((acc, num) => acc + num, 0); // Mengganti loop dengan reduce
  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. Arrow Functions & String Literals
const phi = 3.14;
let radius = 0;

const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power); // Menggunakan default parameter untuk power

radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. Default parameter
const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
};

makeAjaxRequest('www.google.com');
