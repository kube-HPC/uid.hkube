const { v4: uuidv4 } = require('uuid');
const cryptoRandomString = require('crypto-random-string');

const uuid = () => {
    return uuidv4();
};

const randomString = ({ length = 4 } = {}) => {
    return cryptoRandomString({ length, characters: '0123456789abcdefghijklmnopqrstuvwxyz' });
};

const shortId = ({ length = 4 } = {}) => () => randomString({ length })

module.exports = {
    uuid,
    randomString,
    shortId
};
