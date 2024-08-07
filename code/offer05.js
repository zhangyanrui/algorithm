var replaceSpace = function(s) {
    if (s == null || s.length == 0) {
        return s;
    }
    const sLength = s.length;
    let charIndex = 0;
    let result = '';
    while (charIndex < sLength) {
        const currentChar = s[charIndex];
        if (currentChar == ' ') {
            result += '%20';
        } else {
            result += currentChar;
        }
        charIndex++;
    }
    return result;
};