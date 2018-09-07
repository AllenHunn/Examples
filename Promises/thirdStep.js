module.exports = (finalNum) => {
    return new Promise((resolve, reject) => {
        console.log(`${finalNum} received. Rejecting if odd.`);
        if (finalNum % 2 !== 0){
            reject("Odd numbers are too weird for me!");
        }
        resolve("Even numbers are the best!");
    });
}