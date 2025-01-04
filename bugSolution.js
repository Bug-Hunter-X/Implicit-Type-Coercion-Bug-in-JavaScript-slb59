function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

console.log(foo(1,2)); //Output: 3

function foo2(a, b) {
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);
  if (isNaN(numA) || isNaN(numB)) {
    return 'Invalid input';
  }
  return numA + numB;
}
console.log(foo2(1,'2')); //Output: 3