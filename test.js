function lili(input) {
    let age = Number(input.shift());
    let washmachinePrice = Number(input.shift());
    let singleToyPrice = Number(input.shift());
    let loss = 0;
    let saved = 0;
    let toySavings = 0;

    for(let i = 1; i <= age; i++){
    
        
        if(i % 2 === 0) {
            saved += 10;
            loss += 1;
            
        } else {
            toySavings = toySavings * singleToyPrice;
        }
    }
      let total = saved + toySavings - loss;

        if(total >= washmachinePrice) {
            let change = total - washmachinePrice;
            console.log(`Yes! ${change.toFixed(2)}`)
        } else {
            let neededCash = washmachinePrice - total;
            console.log(`No! ${neededCash.toFixed(2)}`);
        }
    }

lili(["10", "170.00", "6"]);








// function skip (input) {
//     let n = Number(input.shift());

//     for(let i = 1; i <= n; i += 3){
//         console.log(i);
//     }
// }
// skip(["10"]);

// function backwards(input) {
//     let start = Number(input.shift());

//     for(let i = start; i > 0; i--) {
//         console.log(i);
//     }
// }
// backwards(["2"]);



// function leftRightSums(input) {
//     let count = Number(input[0]);
//     let leftNums = 0;
//     let rightNums = 0;

//     for(let i = 1; i <= count; i++) {
//         let number = Number(input[i]);
//         leftNums += number;
//     }

//     for(let j = count + 1; j <= count * 2; j++) {
//         let num = Number(input[j]);
//         rightNums += num;

//     }

    

//     if(leftNums == rightNums) {
//         console.log(`Yes, sum = ${leftNums}`)
//     } else {
//         let difference = Math.abs(rightNums - leftNums);
//         console.log(`No, diff = ${difference}`);
//     }
// }
// leftRightSums(["2", "10", "90", "60", "40"]);
// leftRightSums(["2", "90", "9", "50", "50"]);


// function numbers(input) {
//     let count = Number(input.shift());
    
//     let maxNum = Number.MIN_SAFE_INTEGER;
//     let minNum = Number.MAX_SAFE_INTEGER;

//     for(let i = 0; i <= count; i++) {
//         let number = Number(input.shift());
        


//         if(number < minNum) {
//             minNum = number;
//         }
//         if(number > maxNum) {
//             maxNum = number;
//         }

//     }
//     console.log(`Max number: ${maxNum} \nMin number: ${minNum}`);

// }
// numbers(["5", "10", "20", "304", "0", "50"]);





// function numSum(input) {
//     let numCount = Number(input[0]);
  
//     let sum = 0;

//     for(let i = 1; i <= numCount; i++) {
//         let num = Number(input[i]);
//         sum += num;
//     }
//     console.log(sum);
// }
// numSum(["2", "10", "20"]);

// function sum(input) {
//     let word = input.shift();
//     let letter = "";
//     let letterNum = 0;
//     let letterSum = 0;

//     for(let i = 0; i < word.length; i++) {
//         letter = word[i];

//         if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
//             if(letter === 'a') {
//                 letterNum = 1;
//             } else if(letter === 'e') {
//                 letterNum = 2;
//             } else if(letter === 'i') {
//                 letterNum = 3;  
//             } else if(letter === 'o') {
//                 letterNum = 4;
//             } else {
//                 letterNum = 5;
//             }
//         } else{
//             letterNum = 0;
//         }
//         letterSum += letterNum;
// }
//    console.log(letterSum); 
// }

// sum(["hello"]);
// sum(["hi"]);
// sum(["bamboo"]);
// sum(["beer"]);




// function symbols(input) {
//     let word = input.shift();
//     let letter = "";

//     for(let i = 0; i < word.length; i++) {
//         letter = word[i];
//         console.log(letter);
//     }
// }
// symbols(["softuni"]);



// function multiplication(input) {
//     let str = input.shift();
//     let reversedString = str.split('').reverse();
//     let numbers = [];

//     for(let n = 0; n < reversedString.length; n++) {
//         numbers[n] = Number(reversedString[n]);
//     }

//     for(let i = 1; i <= reversedString[0]; i++) {
//         for(let j = 1; j <= reversedString[1]; j++) {
//             for(let k = 1; k <= reversedString[2]; k++) {
//                 console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
//             }
//         }
//     }
// }
// multiplication(["324"]);








// function travel(input) {
    
//     let passengerNum = Number(input.shift());
//     let busStopsNum = Number(input.shift());
//     let passengerDiff = [];

//     for(let i = 0; i < input.length; i++){
//         passengerDiff[i] = Number(input[i]);
//     }

//     for(let i = 1; i <= busStopsNum; i++) {
    
//         passengerNum -= passengerDiff[2 * i - 2];
//         passengerNum += passengerDiff[2 * i - 1];

//         if(i % 2 == 0){
//             passengerNum -= 2;
//         }
//         else {
//             passengerNum += 2;
//         }
        
//     }

//     console.log(`The final number of passengers is : ${passengerNum}`);
// }

// travel(["20", "2", "10", "5", "5", "3"]);
// travel(["25","5","14","15","9","11","10","13","6","7","10","8"]);
// travel(["17", "3", "6", "7", "8", "9", "3", "4"]);



// function combos(input) {
//     let startInterval = Number(input.shift());
//     let endInterval = Number(input.shift());
//     let magicNumber = Number(input.shift());
//     let justCombinations = 0;
//     let firstNum = 0;
//     let secondNum = 0;
//     let sum = 0;
//     let hasMagicNumber = false;

//     for (let i = startInterval; i <= endInterval; i++) {
//         for (let j = startInterval; j <= endInterval; j++){
//             sum = i + j;
//             justCombinations++;
//             if (sum === magicNumber) {
//                 firstNum = i;
//                 secondNum = j;
//                 hasMagicNumber = true
//                 break;
//             }
//         }
//         if (hasMagicNumber) {
//             break;
//         }
//     }

  
//     if (hasMagicNumber) {
//         console.log(`Combination N:${justCombinations} (${firstNum} + ${secondNum} = ${magicNumber})`);
//     }
//     else {
//         console.log(`${justCombinations} combinations - neither equals ${magicNumber}`);
//     }
   
// }
// combos(["1", "10", "5"]);
// combos(["23", "24", "20"]);
// combos(["88", "888", "1000"]);
// combos(["88", "888", "2000"]);






// // function combinatios(input) {
// //     let n = Number(input.shift());
// //     let validCombinationsCount = 0;
// //     for (x1 = 0; x1 <= n; x1++) {
// //         for (x2 = 0; x2 <= n; x2++) {
// //             for (x3 = 0; x3 <= n; x3 ++){
// //                 let combinations = x1 + x2 + x3;
// //                 if (combinations === n) {
// //                     validCombinationsCount++;
// //                 }
                
// //             }
// //         }
// //     }
// //     console.log(validCombinationsCount);
// // }

// // combinatios(["3"]);


// // function rectangleBorder(input) {
// //     let x1 = Number(input.shift());
// //     let y1 = Number(input.shift());
// //     let x2 = Number(input.shift());
// //     let y2 = Number(input.shift());
// //     let x = Number(input.shift());
// //     let y = Number(input.shift());

// //     let firstCondition = (x == x1 || x == x2) && (y >= y1 || y <= y2);
// //     let secondCondition  = (y == y1 || y == y2) && (x >= x1 || x <= x2);

// //     if (firstCondition || secondCondition) {
// //         console.log("Border");
// //     } else {
// //         console.log("Inside / Outside");
// //     }
// // }
// // rectangleBorder(["2", "-3", "12", "3", "8", "-1"]);
// // rectangleBorder(["2", "-3", "12", "3", "12", "-1"]);

// // function shop(input) {
// //     let fruit = input.shift();
// //     let price;
// //     let day = input.shift();
// //     let quantity = Number(input.shift());

// //             if (day !== "Saturday" || day !== "Sunday") {
// //                     if (fruit === "banana") price = 2.50;
// //                     else if (fruit === "apple") price = 1.20;
// //                     else if (fruit === "orange") price = 0.85;
// //                     else if (fruit === "grapefruit") price = 1.45;
// //                     else if (fruit === "kiwi") price = 2.70;
// //                     else if (fruit === "pineapple") price = 5.50;
// //                     else if (fruit === "grapes") price = 3.85;
// //                     else console.log("error");
// //                     console.log((price * quantity).toFixed(2));
                    
// //             } else if (day === "Saturday" || day === "Sunday") {
// //                 if (fruit === "banana") price = 2.70;
// //                 else if (fruit === "apple") price = 1.25;
// //                 else if (fruit === "orange") price = 0.90;
// //                 else if (fruit === "grapefruit") price = 1.60;
// //                 else if (fruit === "kiwi") price = 3.00;
// //                 else if (fruit === "pineapple") price = 5.60;
// //                 else if (fruit === "grapes") price = 4.20;
// //                 else console.log("error");
// //                 console.log((price * quantity).toFixed(2));
// //             } else {
// //                 console.log(" ");
// //             }
            
// //     } 

// // shop(["apple", "Tuesday", "2"]);
// // shop(["orange", "Sunday", "3"]);
// // shop(["kiwi", "Monday", "2.5"]);
// // shop(["grapes", "Saturday", "0.5"]);
// // shop(["tomato", "Monday", "0.5"]);