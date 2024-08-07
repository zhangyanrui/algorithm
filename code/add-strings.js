https://leetcode-cn.com/problems/add-strings/
function addString(str1, str2) {
    let i = str1.length - 1;
    let j = str2.length -1;
    let carry = 0;
    let result = '';
    while (i >=0 || j >=0) {
        let current = 0;
        if (i >=0) {
            let num1 = str1[i--] - '0';
            current += num1;
        }
        if (j >=0) {
            let num2 = str2[j--] - '0';
            current += num2;
        }
        current += carry;
        carry = Math.floor(current / 10);
        result = String(Math.floor(current % 10)) + result;
    }
    if (carry > 0) {
        result = String(carry) + result;
    }
    return result;
}

const newStr = addString('223456789', '1321323124');
console.log(newStr);