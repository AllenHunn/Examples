const random = require('random');

module.exports = () => {
    return new Promise((resolve, reject) => {
        resolve(random.int(1000, 10000));
    }); 
}