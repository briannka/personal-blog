function concertSeats(input) {
    let ticketNum = Number(input.shift());
    let ticketNames = input;
    let decodedTicketNames = "";

    for(let i = 0; i < ticketNum; i++) {      

        if(ticketNames[i].length === 4) {
            if (ticketNames[i].charCodeAt(0) > 64 && ticketNames[i].charCodeAt(0) < 97) {
                decodedTicketNames = ticketNames[i].charAt(0) + ticketNames[i].charAt(1) + ticketNames[i].charAt(2);
            }
            else {
                decodedTicketNames = ticketNames[i].charAt(3) + ticketNames[i].charAt(1) + ticketNames[i].charAt(2);
            }
            console.log(`Seat decoded: ${decodedTicketNames}`);
        } else if(ticketNames[i].length === 5 || ticketNames[i].length === 6) {
            decodedTicketNames = ticketNames[i];
            console.log(`Seat decoded: ${ticketNames[i].charAt(0)}${decodedTicketNames.charCodeAt(1)}`);;
        }
    }
   
}

concertSeats(["3", "042W", "W981", "W24578"]);






// function savings(input) {
//     let income = Number(input.shift());
//     let monthsToSave = Number(input.shift());
//     let neededSum = Number(input.shift());

//     let cashBooster = income * 0.30;
//     let monthlySavings = income - (neededSum + cashBooster);
//     let totalSavings = (3 * monthlySavings).toFixed(2);
//     let savingsPercentage = ((monthlySavings / income) * 100).toFixed(2);

//     console.log(`She can save ${savingsPercentage}%\n${totalSavings}`);

// }
// savings(["1500", "3", "800"]);






// function easterLunch(input) {
//     let kozunakNum = Number(input.shift());
//     let eggDozen = Number(input.shift());
//     let cookieKg = Number(input.shift());

//     let kozunakPrice = kozunakNum * 3.20;
//     let cookiesPrice = cookieKg * 5.40;
//     let eggPrice = eggDozen * 4.35;
//     let eggPaint = eggDozen * 12 * 0.15;

//     let sum = (kozunakPrice + cookiesPrice + eggPrice + eggPaint).toFixed(2);

//     console.log(sum);
// }
// easterLunch(["3", "2", "3"]);
// easterLunch(["4", "4", "3"]);


// console.log(reversedString);
    // let numbers = str.split('').reverse().map(num => Number(num));
    // let numbers = reversedString.map(num => Number(num));
    // let numbers = reversedString.map((num) => { return Number(num); } );
    // let numbers = reversedString.map(function (num) { return Number(num); } );