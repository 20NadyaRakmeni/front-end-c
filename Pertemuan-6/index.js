//Array & Object
//1.Array
//Deklarasi variable array
//Cara 1. Array literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// //cara 2. kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

//tipe data dalam Array
// let numbers = [1, 2, 3, 4, 5];//numbers
// let students = ["John", "Jane", "Bob"];//string
// let john = ["John", 30, true, [80, 90, 100]];//campuran
// console.log(john);

// //Array lenght
// console.log(numbers.length);
// console.log(students.length);
// console.log(john.length);

//mengakses element dalam array
//melalui index.index selalu di mulai dari 0
// console.log(numers2[2]);//3
// console.log(students[1]);//jane
// console.log(john[3]);//80 90 100
// console.log(john[3][1]);//90

// //mengakses element terakhir dalam array
// let numbers = [1 ,2 ,3 , 4, 5, 6, , 7, 8, 9, 10];
// console.log(numbers[numbers.length - 1]);

//array method
let array = [1, 2, 3, "hallo", false  ,true];
console.log(array);
//toString()
console.log(array.toString());   
//join()
console.log(array.join(" "));
console.log(array.join("_"));
//pop ()
array.pop();
console.log(array);
//push
array.push("Selamat pagi");
console.log(array);
//shift
array.shift();
console.log(array);
//unshift
array.unshift("Selamat pagi");
console.log(array);
//splice
array.splice(3, 0, 4, 5);
console.log(array);
//concat ()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", " kacang polong"];

let makanan = buah.concat(sayur,biji);
console.log(makanan);

//slice ()
let sayuran = makanan.slice(3, 6);
console.log(sayuran);