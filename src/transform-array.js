const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let newArray = [];
    if (!Array.isArray(arr)) {
        throw new Error('');
    }
    arr.forEach((item, index, array) => {
        if (item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !== '--double-prev') {
            newArray.push(item);
            if (array[index - 1] === '--discard-next') {
                newArray.pop(item);
            }
            if (array[index - 1] === '--double-next') {
                newArray.push(item);
            }
            if (array[index + 1] === '--discard-prev') {
                newArray.pop(item);
            }
            if (array[index + 1] === '--double-prev') {
                newArray.push(item);
            }
        }
    });

    return newArray;
};