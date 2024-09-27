const palindromes = function (string) {
    let arr = string.toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')
    .replace(/\s/g, '')
    .split('');
    let reverse = arr.slice().reverse();
    return arr.every((val, index) => reverse[index] === arr[index]);
};

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;