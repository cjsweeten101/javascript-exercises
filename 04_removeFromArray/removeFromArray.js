const removeFromArray = function(inputArray) {
    let result = inputArray;
    let valuesToBeRemoved = Array.from(arguments);
    valuesToBeRemoved.shift();
    for (const value of result) {
        for (const argVal of valuesToBeRemoved) {
            if (value === argVal) {
                result = result.toSpliced(result.indexOf(value), 1)
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
