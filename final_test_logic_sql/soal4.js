function printNumber(start, rows) {
  let str = "";

  for(let i = 1; i <= rows; i++) {
    for(let j = start; j < start + i; j++) {
      str += `${j} `;
    }
    start ++;
    str += "\n";
  }

  return str;
}

console.log(printNumber(1, 7));
console.log(printNumber(5, 7));
