const repeatString = function(argString, repeatNumber) {
    if (repeatNumber < 0) {
        return "ERROR";
    } else {
        let result = '';
        for (let i = 0; i < repeatNumber; i++) {
            result += argString;
        }    
    return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
