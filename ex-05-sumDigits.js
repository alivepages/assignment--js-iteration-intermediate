/**
 * sumDigits()
 *
 *  Write a function called `sumDigits` that accepts a number
 *  and returns a sum total of the value of the digits
 *
 *
 *  Examples:
 *    sumDigits(12) => 3
 *    sumDigits(1112) => 5
 *    sumDigits(406) => 10
 **/

 // function sumDigits(number) {
 //   let sum = 0
 //   let text = number.toString()
 //   for (i=0; i<text.length; i++) {
 //     let num = parseInt(text[i])
 //     sum += num
 //   }
 //   return sum
 // }

 function sumDigits(number) {
   sum = 0
   while(number / 10 > 0) {
     sum += (number % 10)
     number = parseInt(number / 10)
   }
   return sum
 }


console.group('JS Iterations Week');
  console.log('%cFunction: sumDigits', 'background-color: green; color: white')
  console.groupCollapsed('Should return 6 from "123"');
    console.assert(sumDigits(123) === 6)
  console.groupEnd();

  console.groupCollapsed('Should return 11 from "911"');
    console.assert(sumDigits(911) === 11)
  console.groupEnd();

  console.groupCollapsed('Should return 12 from "8040"');
    console.assert(sumDigits(8040) === 12)
  console.groupEnd();

  console.groupCollapsed('Should return 15 from "173220"');
    console.assert(sumDigits(173220) === 15)
  console.groupEnd();
console.groupEnd();
