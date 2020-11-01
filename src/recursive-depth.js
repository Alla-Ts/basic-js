const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            let deep = 0;
            for (let i = 0; i < arr.length; i++) {
                let curdeep = this.calculateDepth(arr[i]);
                if (deep < curdeep) {
                    deep = curdeep;
                }
            }
            return 1 + deep;
        } else {
            return 0;
        }
    }
};