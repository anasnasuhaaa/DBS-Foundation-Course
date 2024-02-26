// Map
const students = ["John", "Marry", "Siti", "Krisna"].map((callback) => {
  return callback;
});
console.log("Map:", students);

// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((num) => num % 2 == 0);
console.log("Filter:", numbers);

// Reduce
let sum = [1, 2, 3, 4, 5].reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("Reduce: ", sum);

// Some
// Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka genap.
const nums = [];
for (let i = 1; i <= 30; i++) {
  nums.push(i);
}
const even = nums.some((elemet) => elemet % 2 === 0);
console.log(even);

// Find
const siswa = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const findHarry = siswa.find((s) => s.name === "Harry");
console.log("Harry:", findHarry);

// Sort
const randomNumber = [21, 12, 34, 43, 67, 89, 23, 10];
const highToLow = randomNumber.sort();
const lowToHigh = randomNumber.sort((a, b) => a - b);
console.log("Sort High To Low: ", lowToHigh);
console.log("Sort Low To High: ", highToLow);

// Every
const everyScore = siswa.every(
  (student) => student.score >= 70 && student.score <= 100
);
if (!everyScore) console.log("There is some wrong score!");
else console.log("All scores are correct.");    


// ForEach
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});