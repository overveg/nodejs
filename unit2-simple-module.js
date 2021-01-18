var Shuffle = require('shuffle');
var goFish = [{color: 'red', number: 1}, {color: 'blue', number: 2}, {color: 'green', number: 3}, {color: 'yellow', number: 4}];
var deckOfFish = Shuffle.shuffle({deck: goFish});

console.log(deckOfFish);