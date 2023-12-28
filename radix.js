
function getDigit(num, i) { //returns the digit in num at the i-th place
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; //Math.pow(10, i) raises 10 to the i-th power
  }
  
  function digitCount(num) { //returns the number of digits in num
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) { // returns the number of digits in the largest number in the list
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums) {
    let maxDigitCount = mostDigits(nums); //returns the number of digits in the largest number in the list
    for (let k = 0; k < maxDigitCount; k++) { //loops through the number of digits based on the largest number in the list
      let digitBuckets = Array.from({ length: 10 }, () => []); //creates an array of 10 empty arrays
      for (let i = 0; i < nums.length; i++) { // loops through the list of numbers
        let num = nums[i];
        let digit = getDigit(num, k);
        digitBuckets[digit].push(num);
      }
      nums = [].concat(...digitBuckets); //concatenates the 10 arrays into one array
    }
    return nums;
  }
  
  module.exports = { getDigit, digitCount, mostDigits, radixSort };