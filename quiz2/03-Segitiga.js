/** buat segitiga  */ 

let string = "";
for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 6-i; j++) {
    string += j;
  }
  string += "\n";
} 
console.log(string);
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

let string2 = "";
for (let i = 0; i < 6; i++) {
  for (let j = 5-i; j>0; j--) {
    string2 += j;
  }
  string2 += "\n";
}  
console.log(string2);

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

