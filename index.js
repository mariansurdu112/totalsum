const areObjects = require('are-objects');
const areArrays = require('are-arrays');
const sum = (a, b) => {
    if(a instanceof Array && b instanceof Array){
        const sumA = a.reduce((partialSum, x) => partialSum + x, 0);
        const sumB = b.reduce((partialSum, x) => partialSum + x, 0);
        return sumA+sumB;
    } else{
        return a+b;
    }
}
exports.sum = sum
