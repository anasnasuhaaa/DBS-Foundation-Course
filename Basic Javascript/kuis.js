/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai "Bakso Mang Dicoding".
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai "Bandung".
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai "Es Teh".
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai "Bakso".
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai false.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */

const restaurant = {
  name: "Bakso Mang Dicoding",
  city: "Bandung",
  "favotire drink": "Es Teh",
  "favorite food": "Bakso",
  isVegan: false,
};

/*
let name = restaurant.name
let favoriteDrink = restaurant["favotire drink"]
console.log(`Nama restoran adalah ${name}`);
console.log(`Minuman Favoritnya adalah ${favoriteDrink}`);
*/

let evenNumber = [];

function addEvenNumbers(num) {
  for (let i = 1; i <= num; i += 2) {
    evenNumber.push(i);
  }
  console.log(evenNumber);
}

addEvenNumbers(100);

/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

const priceInJPY = 5000;

// Tulis kode di bawah ini
let currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);

let priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR);
