/*
题目： 有一个整数数组，请你根据快速排序的思路，找出数组中第K大的数。
给定一个整数数组a,同时给定它的大小n和要找的K(1<=K<=n)，请返回第K大的数(包括重复的元素，不用去重)，保证答案存在
*/



let a = [5, 4, 3, 2, 1, 9, 3, 3, 2, 1, 1];

console.log(quickFind(a, 9));

function quickFind(arr, k) {
    if (arr.length == 0) {
        return 0;
    }
    if (arr.length == 1) {
        return arr[0];
    }

    let middleIndex = Math.floor(arr.length / 2);
    // console.log("middleIndex: " + middleIndex);
    const middleNumber = arr.splice(middleIndex, 1)[0];
    // console.log("middleNumber: " + middleNumber);

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < middleNumber) {
            left.push(element)
        } else {
            right.push(element)
        }
    }
    
    if (left.length > k) {
        return quickFind(left, k)
    } else if (left.length == k) {
        return left[length - 1];
    } else if (left.length + 1 == k) {
        return middleNumber;
    } else {
        return quickFind(right, k - left.length);
    }
    
}