const delay = require('delay');

module.exports = async (baseNum) => {
    await delay(baseNum);
    console.log(`${baseNum} received. Multiplying by 3`);
    return baseNum * 3;
}