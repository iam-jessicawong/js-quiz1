/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
  const splitStr = s.split("/");
  const toDate = new Date(splitStr[2], splitStr[0]-1, splitStr[1])
  return (toDate == "Invalid Date") ? `${s} bad format date` : toDate;
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date