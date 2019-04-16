// Readme
// nppm install readline-sync
// node PS5_problem2.js


var readline = require('readline-sync'); // this is to read the inputs from the console

var table_messages_string = "";

// this function generates the random number to pick the messages from the table
function getRandomNumber(start, end) {
    return Math.floor(Math.random() * end) + start
}

function readTableMessages(callback) {
    var fs = require('fs'),
        path = require('path'),
        filePath = path.join(__dirname, 'table_message.txt');

    fs.readFile(filePath, { encoding: 'utf-8' }, function(err, data) {
        if (err) {
            console.log("Error in reading table messages data");
            console.log(err);
            callback(" ")
            return;
        } else {
            console.log("Data has fetched properly from the file");
            callback(data);
            return;
        }
    });
}

function finalOutput(ruler, alices_of_ruler) {
    console.log("Who is the ruler of Southeros?");
    if (ruler !== "") {
        console.log("None");
    } else {
        console.log(ruler);
    }
    console.log("Allies of Ruler?");
    if (ruler !== "" || alices_of_ruler.length <= 0) {
        console.log("None");
    } else {
        console.log(alices_of_ruler.toString());
    }
}

function testingFunction() {
    readTableMessages(function(data) {
        console.log(data);
    });
}

testingFunction();