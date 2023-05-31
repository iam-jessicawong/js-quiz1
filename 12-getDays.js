/** Display year is kabisat and display month */

function getDays(month,year){
  if (isNaN(month) && isNaN(year)) {
    return "inputan bulan & tahun harus dalam integer"
  } else if (isNaN(month)) {
    return "inputan bulan harus dalam integer";
  } else if(isNaN(year)) {
    return "inputan tahun harus dalam integer"
  }

  const days = new Date(year, month, 0).getDate();
  
  return (new Date(year, 2, 0).getDate() === 29 ) ? `This month has ${days} days, ${year} adalah tahun kabisat` : `This month has ${days} days`
}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari