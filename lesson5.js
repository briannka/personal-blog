function evenOrOdd(input) {
    let n = Number(input.shift());
    let numbers = input;
    let sum = 0;
    let min = input[0];
    let max = input[0];
    let evenNumbers = [];
    let oddNumbers = [];
    let oddSum = 0;
    let oddMax = 0;
    let oddMin = 0;
    let evenSum = 0;
    let evenMax = 0;
    let evenMin = 0;


    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
        let num = Number(numbers[i]);
        if (num % 2 == 0) {
           evenNumbers.push(num);
        }
        else {
            oddNumbers.push(num);
        }
    }

    oddMin = Math.min(Number(oddNumbers));
    evenMin = Math.min(Number(evenNumbers));

    for (i = 0; i < oddNumbers.length; i++) {
       oddSum += Number(oddNumbers[i]);
       if (oddSum > oddMax) {
           oddMax = oddSum;
       }
       if (oddNumbers[i] < oddMin) {
           oddMin = Number(oddNumber[i]);
       }
    }

    for (i = 0; i < evenNumbers.length; i++) {
        evenSum += Number(evenNumbers[i]);
        if (evenSum > evenMax) {
            evenMax = evenSum;
        }
        if (evenNumbers[i] < evenMin) {
            evenMin = Number(evenNumbers[i]);
        }
    }

    
    console.log("OddSum =" + oddSum.toFixed(2) + ", OddMin ="+ oddMin.toFixed(2) + ", OddMax =" + oddMax.toFixed(2) + ", EvenSum =" + evenSum.toFixed(2) + ", EvenMin =" + evenMin.toFixed(2) + ", EvenMax =" + evenMax.toFixed(2))



}




evenOrOdd(["6",
"2",
"3",
"5",
"4",
"2",
"1"])


// function solution(array) {
//     let numberInput = Number(array.shift());
//     let biggest = array[0]
//     let biggestIndex;
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (Number(array[i]) > biggest) {
//             biggest = Number(array[i]);
//             biggestIndex = i;

//         }
//     }   

//    array.splice(biggestIndex,1);
    
//     for (let i = 0; i < array.length; i++) {
//         sum += Number(array[i]);
//     }   

//     if (sum == biggest) {
//         console.log("Yes", "\nSum =", biggest);
//     }
//     else {
//         let diff = sum - biggest;
//         console.log("No", "\nDiff =", Math.abs(diff));
//      }
// }
// // solution(["7", "3", "4", "1", "1", "2", "12", "1"]);
// solution(["3", "5", "5", "1"]);

// function element(input) {
//     let numberInput = Number(input.shift());
//     let biggest = input[0];
//     let sum;

//     for (let i = 0; i < n; i++) {
//         let number = Number(input.shift());
//             sum =+ number;
//         if (number > biggest) {
//             biggest = number;
//         }
        
//         if (sum == biggest * 2){
//             console.log("Yes" + "\nSum = " + sum);
//         }
//         else {
//             let diff = sum - biggest;
//             console.log("No", "Diff = " + diff);
//         }
// }
// element(["7", "3", "4", "1", "1", "2", "12", "1"]);









// function evenVsOdd(input) {
//     let n = Number(input[0]);
//     let evenSum = 0;
//     let oddSum = 0; 
//     for (let i = 0; i < n; i++) {
//         let element = Number(input[i]);
//         if (i % 2 == 0) {
//            Number(evenSum += element);
//         }
//         else {
//             Number(oddSum += element);
//         }
//     }  
//         if (evenSum == oddSum) {
//         console.log("Yes" + "\nSum = " + evenSum);
//         }
//         else {
//         let diff = Number(evenSum - oddSum);
//         console.log("No" + "\nDiff = " + diff);
//         }

//     }
// evenVsOdd(["4", "10", "50", "60", "20"]);

// function amount(input) {
//     let n = Number(input.shift());
//     let leftSum = 0;
//     let rightSum = 0;
//     for (let i = 1; i < n; i++) {
//         leftSum = leftSum + Number(input[i]);
//     } 
//     for (let k = 1; k < n; k++) {
//         rightSum = rightSum + Number(input[k]);
//     }
//     if (leftSum == rightSum) {
//         console.log("Yes, sum = " + leftSum);
//     } 
//     else {
//         let diff = Math.abs (rightSum - leftSum);
//         console.log("No, diff = " + diff);
//     }
// }

// amount(["2", "10", "90", "60", "40"]);



// function numSum(input) {
//     let numbersCount = Number(input.shift());
//     let sum = 0;
//     for (let i = 0; i < numbersCount; i++) {
//         sum += Number(input[i]);
//     } 
//     console.log(sum);
// }
// numSum(["2", "10", "20"]);
// numSum(["3", "-10", "-20", "-30"]);
// numSum(["4", "45", "-20", "7", "11"]);





// function sumNumbers(input) {
//     let maxNumber = Number.MIN_SAFE_INTEGER;
//     let minNumber = Number.MAX_SAFE_INTEGER;
//     let n = Number(input.shift());
//     for (let i = 0; i < n; i++) {
//         let number = Number(input.shift());
//         if (number < minNumber) {
//             minNumber = number; 
//         } 
//         if (number > maxNumber) {
//              maxNumber = number;
//         }
//     } 
//     console.log("Max number: " + maxNumber + "\nMin number: " + minNumber);
// }

// sumNumbers(["5", "10", "20", "304", "0", "50"]);





// function vowelSum(input) {
//     let inputStr = input[0];
//     let sum = 0;
//     for (let i = 0; i < inputStr.length; i++) {
//         switch (inputStr[i]) {
//             case "a": sum += 1; break;
//             case "e": sum += 2; break;
//             case "i": sum += 3; break;
//             case "o": sum += 4; break;
//             case "u": sum += 5; break;
//         }
//     } console.log(sum);
// }
// vowelSum(["hello"]);
// vowelSum(["hi"]);
// vowelSum(["bamboo"]);


// vowelSum(["beer"]);


// function charSequence(input) {
//     let word = input.shift();
//     let letter;
//     for (i = 0; i < word.length; i++) {
//         let letter = word[i];
//         console.log(letter);
//     }
// }
// charSequence(["softuni"]);



// function latinLetters() {
//     for (i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++){
//         console.log(String.fromCharCode(i));
//     }
// }
