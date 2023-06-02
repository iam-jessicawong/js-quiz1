const arr = [3,8,9,7,6];
function rotateArray(arr, rotation) {
  if(rotation == 0) return;

  rotation--;
  const rotatedArray = [arr[arr.length-1] ,...arr.slice(0, -1)]
  console.log(`${arr} => ${rotatedArray}`);

  rotateArray(rotatedArray, rotation);
}

rotateArray(arr, 3);