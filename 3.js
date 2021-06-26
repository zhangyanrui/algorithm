/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length == 0) {
        return 0;
    }
    if (s.length == 1) {
        return 1;
    }
    let tempSet = new Set();
    let maxLength = 0;
    let right = 0;

    for (let index = 0; index < s.length; index++) {
        let current = s[index];
        console.log(index);
        
        while (!tempSet.has(current)) {
            tempSet.add(current)
            right++;
            current = s[right];
            console.log(current, "-");
        }
        console.log(tempSet,index);
        
        tempSet.clear();
        
        maxLength = Math.max(maxLength, right  - index);
        right = index;
    }
    return maxLength;
};


const maxLength = lengthOfLongestSubstring("aabb");
console.log(maxLength);