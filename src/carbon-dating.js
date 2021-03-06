const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity === 'string' && sampleActivity > 0 && sampleActivity <= 15) {
        let k = 0.693 / HALF_LIFE_PERIOD;
        let result = Math.log(MODERN_ACTIVITY / sampleActivity);
        return Math.ceil(result / k)
    } else return false;
};