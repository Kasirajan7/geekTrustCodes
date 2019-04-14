// Readme
// nppm install readline-sync
// node PS5_problem1.js


var readline = require('readline-sync'); // this is to read the inputs from the console


var country_emblem = {
    "land": "panda",
    "water": "octopus",
    "ice": "mammoth",
    "air": "owl",
    "fire": "dragon",
    "space": "gorilla"
};

var emblem = ["panda", "octopus", "owl", "mammoth", "dragon", "gorilla"];

var inputMessage = [];
var processed_io_msg = [];
var final_kingdoms = [];
var acquired_kingdoms = []


function printOutput(outputMessage) {
    console.log("Who is the ruler of Southeros? ");
    if (outputMessage.length < 3) {
        console.log("None");
    } else {
        console.log("King Shan");
    }
    console.log("Allies of Ruler?");
    if (outputMessage.length == 0) {
        console.log("None");
    } else {
        console.log(outputMessage.toString());
    }
}

function getInputs() {
    inputMessage = []; // the array is made empty when the user gets the new sets of input.

    var messageSize = readline.question("Enter the number of messages - ");
    var tempMessage = "";

    if (messageSize <= 0) {
        console.log("Message Size cannot be less than 1");
    }

    for (var i = 0; i < messageSize; i++) {
        tempMessage = readline.question("Enter the message " + i + " - ");
        inputMessage.push(tempMessage);
    }
}



function processInput() {


    processed_io_msg = inputMessage.map(message => {
        var tempArray = message.split(",");
        var given_kingdom = tempArray[0];
        var given_message = tempArray[1];
        var emblem = country_emblem[given_kingdom.toLowerCase()];

        if (!emblem) {
            return false;
        }
        extractedAlphaMessage = given_message.replace(/[^a-z]/gi, ''); // this code extracts the alphabets from the sting removes comma and other stuffs etc.
        tempMessage = extractedAlphaMessage.toLowerCase(); // converts the entire message into lower case
        tempMessageArray = tempMessage.trim().split(""); // converts message string into array
        tempEmblemArray = emblem.split(""); // converts the emblem string into array;

        var decision_flag = true; // this flag decides whether the message contains emblem or not


        // below for loop compares the string of messaage and emblem
        tempEmblemArray.forEach(emblem_letter => {
            // temp_decision_flag = tempMessageArray.includes(emblem_letter);

            // removes the element in the array if it occurs for eg panda we should have 2 'a' instead of 1
            var letterIndex = tempMessageArray.indexOf(emblem_letter);
            if (letterIndex > -1) {
                tempMessageArray.splice(letterIndex, 1);
            }

            if (letterIndex == -1 && decision_flag === true) {
                decision_flag = false;
            }
        });

        if (decision_flag) {
            return given_kingdom.toLowerCase();
        } else {
            return false;
        }
    });

    // removes empty an false element in the array
    final_kingdoms = processed_io_msg.filter((element, index) => {
        if (element || element !== "") {
            return element;
        }
    });
    // removes the duplicate element in the array
    acquired_kingdoms = [...new Set(final_kingdoms)];
}

printOutput(inputMessage);
getInputs();
processInput();
printOutput(acquired_kingdoms);