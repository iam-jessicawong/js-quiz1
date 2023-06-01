function maxWordLength(params) {
  return params.split(" ").sort((curr, next) => next.length - curr.length)[0];
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp