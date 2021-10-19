// Desafio 1
function compareTrue(booleano1, booleano2) {
  if (booleano1 === true && booleano2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let number = array[0];
  let count = 0;
    for (let index = 1; index < array.length; index += 1) {
      if(array[index] > number) {
        number = array[index];
      }
    }
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (number === array[index2]) {
        count += 1
      }
    }
    return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) { 
  if ((mouse - cat1) < (mouse - cat2)) {
    return cat1;
  } else if ((mouse - cat2) < (mouse - cat1)) {  
    return cat2;    
 }
    return 'os gatos trombam e o ratto foge';    
}

// Desafio 8
function fizzBuzz(array) {    
  for (let index = 0; index < array.length; index +=1) {
    if (array[index] % 3 == 0 || array[index] % 5 == 0) {
      return 'fizzBuzz';      
    } else if (array[index] % 3 == 0) {
      return 'fizz';
    } else if (array[index] % 5 == 0) {
      return 'buzz';
    }
    return 'bug!'
  }
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
