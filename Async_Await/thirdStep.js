module.exports = async (finalNum) => {
    console.log(`${finalNum} received. Rejecting if odd.`);
    if (finalNum % 2 !== 0){
        throw "Odd numbers are too weird for me!";
    }
    return "Even numbers are the best!";
}