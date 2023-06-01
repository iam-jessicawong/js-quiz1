/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1,year2){
  let totalkabisat = 0;
  for(i = year1; i <= year2; i++) {
    if (isKabisat(i)) {
      totalkabisat++;
    }
  }
  return totalkabisat;
}

function isKabisat(year){
  return (new Date(year, 2, 0).getDate() === 29);
}

console.log(howManyKabisat(1997,2021));