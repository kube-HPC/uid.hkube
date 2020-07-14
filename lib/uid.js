const uuidv4 = require('uuid').v4;
const cryptoRandomString = require('crypto-random-string');

const uid = ({ length = 4 } = {}) => randomString({ length })

const uuid = () => uuidv4()

const randomString = ({ length = 4 } = {}) => {
    return cryptoRandomString({ length, characters: '0123456789abcdefghijklmnopqrstuvwxyz' });
};

module.exports = {
    uid,
    uuid,
    randomString,
};
