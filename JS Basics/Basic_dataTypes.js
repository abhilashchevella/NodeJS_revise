// // let
// let counter = 2;
// console.log('1st print count: ', counter);

// counter += 1;
// console.log('2st print count: ', counter);

// // interger
// const a = '123'; 
// console.log('int: ', a);

// const b = '1.314'
// console.log("pie float: ", b);


// Node.js program to demonstrate the 
// process.stdin Property 

// Enter any texts ( User input)
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});