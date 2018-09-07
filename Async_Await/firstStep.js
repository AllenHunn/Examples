const random = require('random');
const delay = require('delay');

module.exports = async () => {
    await delay(random.int(1000, 2000));
    return random.int(1000, 10000);
}