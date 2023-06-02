function totalLompat(x,y,k) {
  let total = 0;
  for(let i = x; i < y; i+=k) {
    total ++;
  }
  return total;
}

console.log(totalLompat(10,85,30));