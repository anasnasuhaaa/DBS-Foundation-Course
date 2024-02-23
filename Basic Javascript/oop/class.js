class car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
    this.carNumber = Math.floor(Math.random() * 1000 + 1);
  }
}

const car1 = new car("BMW", 2020);
console.log(car1); // Car {brand: "BMW", year:

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("John", "Doe");
console.log(user);
console.log(user.fullName);

user.fullName = "Fulan Fulanah";
console.log(user);
console.log(user.fullName);

class Pengguna {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  get chassisNumber() {
    return `${this.chassis} ${this.number}`
  }

  set chassisNumber(chassisNumber) {
    const [chassis, number] = chassisNumber.split(" ");
    this.chassis = chassis
    this.number = number
  }
}

const Pengguna1 = new Pengguna("Agus", 38, "Programmer");
Pengguna1.chassisNumber = 'BWS 928'
console.log(Pengguna1);
console.log(Pengguna1.chassisNumber);
