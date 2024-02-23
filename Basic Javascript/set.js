const numberSet = new Set([1, 2, 3, 1, 2, 1, 5]);
console.log(numberSet);

numberSet.add(7);
numberSet.delete(1);
console.log(numberSet);

let visitCountMap = new Map();

function countUser(user) {
  let count = visitCountMap.get(user) || 0;
  visitCountMap.set(user, count + 1);
}

let Jony = { name: "Jony" };
countUser(Jony);

setTimeout(() => {
  console.log(visitCountMap);
}),
  2000;

