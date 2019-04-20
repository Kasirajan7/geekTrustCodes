var readline = require('readline-sync'); // this is to read the inputs from the console
var sample_array = [2, 4, 3, 1, 6, 9, 11, 14, 232, 12, 56, 32, 10, 8];
console.log(sample_array);
var startNumber = readline.question("Enter the number - ");
var tempIndex = undefined;

console.log("Start Number is " + startNumber);

var tempFlag = false
for (var i = 0; i < sample_array.length * 2; i++) {

    if (sample_array[i % sample_array.length] == startNumber && tempIndex != i) {

        // this if condition is to break the loop
        if (tempIndex == i % sample_array.length) {
            break;
        }
        // this condition is to set the value for tempIndex only once
        if (!tempFlag) {
            tempIndex = i;
        }
        tempFlag = true;
        console.log(startNumber); // this prints the desired  output 
        // this is to increment the value of the start number so that the iteration continues
        var n = (i + 1) % sample_array.length;
        startNumber = sample_array[n];
    }
}

if (!tempFlag) {
    console.log("Entered number " + startNumber + " is not in the array");
}