const uid = require('./lib/uid');

const y = uid.shortId({ length: 8 });
const x = y();

module.exports = uid;