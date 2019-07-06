/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  let sum = 0;
  let arr = [0, 1];

  // do your work here
  for (let i = 2; i < maxFibValue; i++){
    if (arr[arr.length - 1] + arr[arr.length - 2] <= maxFibValue){ 
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      if (arr[arr.length - 1] % 2 === 0){
        sum += arr[arr.length - 1];
      }
    }
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  let highest = 0;
  let arr = [0, 1];

  //define your base case, validate your input
  // for (let i = 2; i < maxFibValue; i++){
  //   if (arr[arr.length - 1] + arr[arr.length - 2] <= maxFibValue){ 
  //     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  //   }
  //   highest = arr[arr.length - 1];
  // }
  // return highest;

  //solve recursively
    if (maxFibValue <= 1){
      return 1;
    }
    return _highestFibonacciNumber(maxFibValue - 1) + _highestFibonacciNumber(maxFibValue - 2);
};

console.log(_highestFibonacciNumber(10));

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
