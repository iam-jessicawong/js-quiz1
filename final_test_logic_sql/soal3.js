const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"];
const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol","Nangka","Timun"];
const uniqueArray1 = [...new Set(array1)];    //remove duplicate value from array 1

const same = uniqueArray1.filter(element => array2.includes(element));
const diff = [...uniqueArray1.filter(element => !array2.includes(element)), ...array2.filter(element => !uniqueArray1.includes(element))];

console.log(`Same = ${same}`);
console.log(`Different = ${diff}`);