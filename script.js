     // task 1
// var number = [1,2,3,4,5,6,7,8,9,10]
// var evenNumber = number.filter(function(number){
//     return number % 2 === 0;
// })
// console.log(evenNumber);

// task 2
// var inputString  = 'hello world'
// var  reversedString = inputString.split(' ').reverse().join(' ')
// console.log(reversedString);



// // task 3
// function isPrime(number){
//     if(number<= 1){
//         return false;
//     }
//     for(var i= 0;i <Math.sqrt(number); i++){
//         if(number % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
//     var inputNum = 13;
// if(isPrime(inputNum)){
//     console.log(inputNum + 'is a prime number');
// }else{console.log(inputNum + ' is not a prime number');}


// task4
// function findMaxElement(list){
// let max = list[0];

// for(var i = 0 ; i < list.length; i++){
//     if(list[i] > max){
//         max = list[i]
//     }
// }
// return max;

// }


// const myList = [12,45,67,23,9,56];
// const MaxElement = findMaxElement(myList);
// console.log('the maximum element in the list is:' + MaxElement);

//  function countVowels(str) {
//   let count = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// const input = prompt('enter your words');
// const vowelCount = countVowels(input);
// console.log("The number of vowels in the input is:", vowelCount);
//  function checkPalindrome(str) {
//   // Reverse the string
//   var reversedStr = str.split('').reverse().join('');

//   // Compare the reversed string with the original string
//   if (str === reversedStr) {
//     return "Haan, yeh ek palindrome hai!";
//   } else {
//     return "Nahi, yeh ek palindrome nahi hai.";
//   }
// }

// // Function ka istemaal karo
// var input = "madam";
// var result = checkPalindrome(input);
// console.log(result);
// [11:09 pm, 26/04/2024] Ammad: function generateFibonacciSeries(n) {
//   var fibonacciSeries = [0, 1]; // Start with the first two terms of the series

//   // Generate the remaining terms
//   for (var i = 2; i < n; i++) {
//     var nextTerm = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
//     fibonacciSeries.push(nextTerm);
//   }

//   return fibonacciSeries;
// }

// // Function ka istemaal karo
// var input = 10; // Number of terms you want in the series
// var result = generateFibonacciSeries(input);
// console.log(result);
// [11:16 pm, 26/04/2024] Ammad: function calculateFactorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     return num * calculateFactorial(num - 1);
//   }
// }

// const input = 5;
// const factorial = calculateFactorial(input);
// console.log("The factorial of", input, "is:", factorial);
// [11:20 pm, 26/04/2024] Ammad: function calculateDigitSum(num) {
//   let sum = 0;
//   const numString = num.to String();

//   for (let i = 0; i < numString.length; i++) {
//     sum += parseInt(numString[i]);
//   }

//   return sum;
// }

// const input = 12345;
// const digitSum = calculateDigitSum(input);
// console.log("The sum of digits of", input, "is:", digitSum);

// var userName = Math.floor(Math.random()*900)
//  console.log(userName);
//  console.log(userName+100);

   

// var now = new Date();
// console.log(now.toString());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMonth());
// console.log(now.getMilliseconds());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// var daynames = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat",];
// var now = new Date()
// console.log(now);
// console.log(now.getDay());
// console.log(daynames[now.getDay()]);


// var now = new Date()
// console.log(now.getMonth()+1 +"/"+ now.getDate()   +"/"+ now.getFullYear()); '===>/'

// console.log(now.getMonth()+1); '===>/'
// console.log(now.getFullYear()); '===>/'




// var now = new Date()
// console.log(now.getMonth()+1 +"-"+ now.getDate()   +"-"+ now.getFullYear()); '===>/'
