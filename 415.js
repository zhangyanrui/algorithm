/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 1002234
const num1 = '89313';
const num2 = '912921';
const result = addStrings(num1, num2);
console.log(result);

function addStrings(num1, num2) {
    let carry = 0;
    let index = 0;
    let result = '';
    while (index < num1.length || index < num2.length) {
        let n1 = 0;
        let n2 = 0;

        let currentNum1Inx = num1.length - index - 1;
        if (num1.length > currentNum1Inx && currentNum1Inx >= 0) {
            n1 = num1[currentNum1Inx] - '0';
        }
        let currentNum2Inx = num2.length - index - 1;
        if (num2.length > currentNum2Inx && currentNum2Inx >= 0) {
            n2 = num2[currentNum2Inx] - '0';
        }
        
        const current = n1 + n2 + carry;
        result = Math.floor(current % 10) + result;
        carry = Math.floor(current / 10);
        index++;
    }
    if (carry > 0) {
        result = carry + result;
    }

    return result;
};