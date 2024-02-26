const factorialRecursion = (num) => {
  if (num === 0 || num === 1) return (num = 1);
  else return (num = num * factorialRecursion(num - 1));
};

console.log(factorialRecursion(5));
