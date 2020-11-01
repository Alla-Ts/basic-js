const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

    let arr = matrix.flat();
    let result = arr.filter(item => item === '^^');

    return result.length;

};