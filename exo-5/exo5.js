// you can write js here

let input = "j'adore vraiment les pates, surtout une bonne bolognaise, ça c'est vaiment le feu";
var vowels = ['a','e','i','o','u'];
var resultArray = [];
for (var i = 0; i < input.length; i++) {
    console.log("lettre courante =" + input[i]);
    //vowels.indexOf(input[i]);
for (var j = 0; j < vowels.length; j++) {
    if (input[i] == vowels[j]) {
        resultArray.push(input[i].toUpperCase());
    }
}
}

console.log(resultArray.join());



console.log('exo-5');
