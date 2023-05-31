/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){
  switch (type) {
    case 'yen':
      return `Rp.${Math.round(money * 130.12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    case 'usd':
      return `Rp.${Math.round(money * 14382.5).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    case 'euro':
      return `Rp.${Math.round(money * 16000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    default:
      return "no match type currency"
  }
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency