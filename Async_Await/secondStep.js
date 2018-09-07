module.exports = (baseNum) => {
    return new Promise((resolve, reject) => {
        console.log(`${baseNum} received. Multiplying by 3`);
        resolve(baseNum * 3);
    });
}