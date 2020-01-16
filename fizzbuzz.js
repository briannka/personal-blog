

function element(input) {
    let numberInput = Number(input.shift());
    let biggest = input[0];
    let sum;

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
            sum =+ number;
        if (number > biggest) {
            biggest = number;
        }
        
        if (sum == biggest * 2){
            console.log("Yes" + "\nSum = " + sum);
        }
        else {
            let diff = sum - biggest;
            console.log("No", "Diff = " + diff);
        }
}
element(["7", "3", "4", "1", "1", "2", "12", "1"]);





//     /*
//  * Programming Quiz: Laugh it Off 2 (5-2)
//  *
//  * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
//  *
//  * Note:
//  *  - make sure your the final character is an exclamation mark ("!")
//  *  - make sure that your function produces the correct results when it is called multiple times
//  */
// function laugh(num) { 
//     for (x = 0; x < 2; x++){
//         for (x = 3; x === 3; x++){
//             console.log("ha!")
//         }
//     }
//     console.log(laugh(3))
// }
// function isThisWorking(input) {
//     console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
//     return "Returning: I am returning this string!";
//   }
  
//   isThisWorking(3);
// //sajksnjxknas

//   var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
//     19, 300, 3775, 299, 36, 209, 148, 169, 299,
//     6, 109, 20, 58, 139, 59, 3, 1, 139
// ];

// test.forEach(function(value, i, arr){
//     if (value % 3 === 0){
//         arr[i] +=100
//     }
// });

// console.log(test);