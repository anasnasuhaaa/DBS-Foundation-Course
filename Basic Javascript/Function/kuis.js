function minimal(a, b) {
  if (a === b) {
    return a;
  } else if (a > b) {
    return b;
  } else if (b > a) {
    return a;
  }
}

function findIndex(arr = [...arr], key) {
  let index;
  if (arr.includes(key)) {
    index = arr.indexOf(key);
    return index;
  } else {
    return -1;
  }
}
// console.log(findIndex([1, 2, 3, 4, 5], 2));
// console.log(findIndex([1, 2, 3, 4, 5], 5));
// console.log(findIndex([1, 2, 3, 4, 5], 6));

function minMax(arrayOfNumbers) {
  let currentMin = arrayOfNumbers[0];
  let currentMax = arrayOfNumbers[0];
  for (value of arrayOfNumbers) {
      if (value < currentMin) {
          currentMin = value;
      } else if (value > currentMax) {
          currentMax = value;
      }
  }

  console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);