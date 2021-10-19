// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
}
  let format = '(xx) xxxxx-xxxx';
  for (let index = 0; index < phoneNumber.length; index += 1) {
    
    let contador = 0;
  
  for (let secondIndex = 0; secondIndex < phoneNumber.length; secondIndex += 1) {
    if (phoneNumber[index] === phoneNumber[secondIndex]){
      contador += 1;
    }
  }
    if (phoneNumber[index] > 9 || phoneNumber[index] < 0 || contador >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    format = format.replace('x', phoneNumber[index]);
  }
    return format;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB + lineC) && lineB < Math.abs(lineA + lineC) && lineC < Math.abs(lineA + lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drink) {
  let regex = /\d+/g;
  let matchString = drink.match(regex);
  let count = 0;
  for (let index = 0; index < matchString.length; index += 1) {
    count += Number(matchString[index]);
  }
  if (count > 1) {
    return `${count} copos de água`;
  }
  return `${count} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
 };
