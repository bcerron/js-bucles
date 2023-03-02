/* # Ejercicios

## Bucles Determinados */

/* - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0. */
console.log('Ejercicio nº 1 ================================================');

const countdown = number => {
  for (let index = number; index > 0; index--) {
    console.log(index);
  }
};
countdown(5);

/* - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array. */
console.log('Ejercicio nº 2 ================================================');
const sum = arr => {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  console.log('La suma de todos los valores es: ' + suma);
};

const arraySuma = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum(arraySuma);

/* - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

4 x 0 = 0
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40 */

console.log('Ejercicio nº 3 ================================================');

const multiplicationTable = number => {
  for (i = 0; i <= 10; i++) {
    console.log(number + ' x ' + i + ' = ' + number * i);
  }
};
multiplicationTable(4);
/* - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

4 x 10 = 40
4 x 9 = 36
4 x 8 = 32
4 x 7 = 28
4 x 6 = 24
4 x 5 = 20
4 x 4 = 16
4 x 3 = 12
4 x 2 = 8
4 x 1 = 4
4 x 0 = 0
 */
console.log('Ejercicio nº 4 ================================================');
const multiplicationTableInverse = number => {
  for (i = 10; i >= 0; i--) {
    console.log(number + ' x ' + i + ' = ' + number * i);
  }
};
multiplicationTableInverse(4);

/* - Crea una función que reciba un año y tu edad, la función debe imprimir:

  - "naciste en el año X"
  - "En el año X cumpliste 1 año"
  - "En el año X cumpliste 2 años"
  - "En el año X cumpliste 3 años"
    ....
 */
console.log('Ejercicio nº 5 ================================================');
const birthday = (year, age) => {
  const birthdayYear = year - age;
  console.log('Naciste en el año ' + birthdayYear);

  for (i = 1; i <= age; i++) {
    console.log('En el año ' + (birthdayYear + i) + ' cumpliste ' + i + ' años');
  }
};

birthday(2023, 37);

/* - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.
 */
console.log('Ejercicio nº 6 ================================================');

const evenPrint = (num1, num2) => {
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
evenPrint(2, 12);
/* - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.
 */
console.log('Ejercicio nº 7 ================================================');
function arrayGenerator() {
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < 5; i++) {
    arr1.push(Math.floor(Math.random() * 10) + 1);
    arr2.push(Math.floor(Math.random() * 10) + 1);
  }
  console.log('Array 1:', arr1);
  console.log('Array 2:', arr2);

  const repeatValues = [];

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    if (arr2.includes(value) && !repeatValues.includes(value)) {
      repeatValues.push(value);
    }
  }
  console.log('Valores repetidos: ', repeatValues);
}

arrayGenerator();
/* - Crea una función que reciba un número y te diga si es primo o no.
 */
console.log('Ejercicio nº 8 ================================================');
const primeNumber = number => {
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return number + ' no es primo';
    }
  }
  return number + ' es primo';
};
console.log(primeNumber(17));
/* - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8".
  Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)
 */
console.log('Ejercicio nº 9 ================================================');
const squaredCubed = nums => {
  for (const num of nums) {
    const squared = Math.pow(num, 2);
    const cubed = Math.pow(num, 3);

    console.log(`Número: ${num} - Cuadrado: ${squared} - Cubo: ${cubed}`);
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
squaredCubed(numbers);

/* - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.
 */
console.log('Ejercicio nº 10 ================================================');
const transform = word => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newWord = '';

  for (let letter of word) {
    if (vowels.includes(letter)) {
      newWord += letter.toUpperCase();
    } else {
      newWord += letter;
    }
  }
  console.log(newWord);
};

transform('murcielago');
/* - Crea una función que reciba una frase e imprim el número de veces que se repite cada vocal
 */
console.log('Ejercicio nº 11 ================================================');
const numberVowels = word => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = [0, 0, 0, 0, 0];

  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    const vowelIndex = vowels.indexOf(letter);
    if (vowelIndex !== -1) {
      vowelsCount[vowelIndex]++;
    }
  }
  for (let i = 0; i < vowels.length; i++) {
    console.log(`La vocal ${vowels[i]} aparece ${vowelsCount[i]} veces.`);
  }
};

numberVowels('Hola Mundo');

/* - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"
 */
console.log('Ejercicio nº 12 ================================================');

const insertWords = (word1, word2) => {
  let result = '';
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      result += word1[i];
    }
    if (i < word2.length) {
      result += word2[i];
    }
  }

  console.log(result);
};

insertWords('hola', 'adios');
insertWords('adios', 'hola');

/* - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM" */

console.log('Ejercicio nº 13 ================================================');
const inverseWord = word => {
  let invertedWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    invertedWord += word[i];
  }
  console.log(invertedWord);
};

inverseWord('Real Madrid');
