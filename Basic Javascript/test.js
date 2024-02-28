const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

console.log(result)
console.log(true || false);

const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// TODO: Kode untuk menambahkan item Charlie pada index ke-2
phoneticAlphabet.splice(2,1, 'cahrlie')
console.log(phoneticAlphabet);

try {
    const arr = [1, 2, 3, 4];
    for (let i = 0; i <= 4; i++) {
        console.log(arr[i]);
    }
} catch(e) {
    console.log("Out of bounds");
}

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyCustomError("This is an error");
} catch (e) {
    console.log(e.message);
}