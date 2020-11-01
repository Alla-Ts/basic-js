const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let month = date.getMonth();
    if (date === '') {
        return 'Unable to determine the time of year!';
    }
    if (isNaN(date) || date === null || date === undefined) {
        throw new Error('');
    }

    if ((month < 2) || (month > 10)) {
        return 'winter';
    }
    if (month < 5) {
        return 'spring';
    }
    if (month < 8) {
        return 'summer';
    } else {
        return 'autumn';
    }

};