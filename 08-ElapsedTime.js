/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
  if (isNaN(seconds)) {
    return `${seconds} is not number`
  }
  const day = Math.floor(seconds / 86400)
  const hour = Math.floor(seconds % 86400 /3600)
  const minute = Math.floor(seconds % 3600 / 60)
  const second = Math.floor(seconds % 60)

  return `${day} hari ${hour} jam ${minute} menit ${second} detik`
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik