const source = require('./source');

const callback = (err, record) => console.log(record);

source.getRecords(100, callback);