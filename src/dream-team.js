const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        return members.map((index) => {
            if (typeof index == 'string') {
                return index.trim()[0].toUpperCase();
            }
        }).sort().join('');
    } else {
        return false;
    }
};