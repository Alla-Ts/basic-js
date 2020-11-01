const CustomError = require("../extensions/custom-error");
const chainMaker = {
    curChain: [],
    getLength() {
        return this.curChain.length;
    },
    addLink(value) {
        this.curChain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (typeof position == "number" || position > 0 || position < this.curChain.length) {
            this.curChain.splice(position - 1, 1);
            return this;
        }
        this.curChain = [];
        throw new Error('THROWN');
    },
    reverseChain() {
        this.curChain.reverse();
        return this;
    },
    finishChain() {
        let chain = this.curChain.join('~~');
        this.curChain = [];
        return chain;
    }

};


module.exports = chainMaker;