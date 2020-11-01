const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let Turns = Math.pow(2, disksNumber) - 1;

    return { turns: Turns, seconds: Math.floor((3600 * Turns) / turnsSpeed) }
};