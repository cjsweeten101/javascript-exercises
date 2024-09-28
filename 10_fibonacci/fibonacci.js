//Defined as the sum of the previous 2 nums
//ie 1 1 2 3 5 8 etc. . .

const fibonacci = function(m) {
    let n = +m;
    if (n === 0) {return 0};
    if (n < 0) {return "OOPS"};
    let j =0; 
    let k = 0;
    let result = []
    for (let i = 0; i <= n - 1; i++) {
        j = result[i -1];
        k = result[i - 2];

        if ( !j || !k ) {
            result.push(1);
        } else {
            result.push(j + k);
        }
    }
    return result[n - 1];
};
// Do not edit below this line
module.exports = fibonacci;
