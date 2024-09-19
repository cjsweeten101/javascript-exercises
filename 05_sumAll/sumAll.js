const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {return "ERROR";}
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {return "ERROR";}
    

    let bigNum = num1 < num2 ? num2 : num1;
    let smallNum = num1 < num2 ? num1 : num2;
    let result = 0;

    for (i = bigNum; i >= smallNum; i--) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
