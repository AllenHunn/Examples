const random = require('random');

module.exports = {
    getRecords: (numberOfRecords, callback) => {
        for(let i = 0; i <= numberOfRecords; i++){
            let randomWait = random.int(1000, 10000);
            setTimeout(() => callback(null, `Calling callback after waiting ${randomWait/1000} seconds for record number ${i}`), randomWait);
        }
    }
}