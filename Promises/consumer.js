const firstStep = require('./firstStep');
const secondStep = require('./secondStep');
const thirdStep = require('./thirdStep');

firstStep()
    .then((num) => secondStep(num))
    .then((finalNum) => thirdStep(finalNum))
    .then((outcome) => console.log(outcome))
    .catch((err) => console.log("Something went wrong!", err));
    
firstStep()
    .then((num) => secondStep(num))
    .then((finalNum) => thirdStep(finalNum))
    .then((outcome) => console.log(outcome))
    .catch((err) => console.log("Something went wrong!", err));