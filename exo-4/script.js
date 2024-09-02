// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
console.log(secretMessage);
let last =secretMessage.pop();
let newLength = secretMessage.push("to","program");
secretMessage[6] = "right";
let first = secretMessage.shift();
let newLenght = secretMessage.unshift("Programming");
secretMessage.splice(6, 5, "know");

console.log(secretMessage.join());
