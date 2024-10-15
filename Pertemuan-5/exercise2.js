// ubah exercise 1 dari fuction biasa menjadi 
//IIFE dan callbak

//IIFE
(function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    console.log(bmi);
})(46, 1.62);

//Callback
function hitungBMI(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
}

let berat = 46; // berat dalam kilogram
let tinggi = 1.62; // tinggi dalam meter 

hitungBMI(berat, tinggi, function(hasilBMI) {
    console.log(hasilBMI);
});
