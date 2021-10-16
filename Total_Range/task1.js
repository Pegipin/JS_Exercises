const sumNumbers = function (a, b) {
  let sum = 0;
  let minNum = Math.min(a, b);
  let maxNum = Math.max(a, b);
  let rangeofNums = [];
  
  for (i = minNum; i <= maxNum; i++) {
      rangeofNums.push(i);
  }

  sum = rangeofNums.reduce((a, b) => {
    console.log(a);
    console.log(b);
    return a + b;
  }, 0);
  return sum;
} 
sumNumbers(3, 5);

module.exports = sumNumbers;

// previous value + current value

//________________________________________________








