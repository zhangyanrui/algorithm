/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const target = 1;
const nums = [4,5,6,7,0,1,2];

const result = search(nums, target);
const result2 = search2(nums, target);
console.log(result, result2);

function search2(nums, target) {
    
    const n = nums.length;

    if (n === 0) {
        return -1;
    }
    if (n === 1) {
        return nums[0] === target ? 0 : -1;
    }
    let left = 0, right = n - 1;
    while (left <= right) {
        let middleIndex = Math.floor((left + right) / 2);
        let middleValue = nums[middleIndex];
        
        if (middleValue == target) {
            return middleIndex;
        }
        if (nums[left] == target) {
            return left;
        }
        if (nums[right] == target) {
            return right;
        }
        
        if (nums[middleIndex] < nums[left]) { //右边连续
            console.log("右边连续");
            if (target >= nums[middleIndex] && target <= nums[right]) {
                left = middleIndex + 1;
            } else {
                right = middleIndex - 1;
            }
        } else { //左边连续 或者 整体连续
            console.log("左边连续");
            if (nums[left] < nums[right]) {//整体连续
                
                if (target > middleValue) {
                    left = middleIndex + 1;
                } else { 
                    right = middleIndex - 1;
                }
            } else if (target < middleValue && target > nums[left]) {
                right = middleIndex - 1;
            } else {
                left = middleIndex + 1;
            }
        }
        return nums[left] == target ? left : -1;
    }
}

 function search(nums, target) {
    let contains = false;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (target === element) {
            contains = true;
            break;
        }
    }
    if (contains == false) {
        return -1;
    }

    let sep = 0;
    while (sep + 1 < nums.length && nums[sep] < nums[sep + 1]) {
        sep++;
    }
    
    const maxV = nums[sep];
    if (target == maxV) {return sep;}
    const startValue = nums[0];
    if (target < startValue) { //后区间
        const rightIndex = indexForValue(nums.slice(sep+1), target)
        // console.log("后区间:", rightIndex);
        return sep + rightIndex + 1;
        
    } else {//前区间
        // console.log("前区间");
        return indexForValue(nums.slice(0, sep + 1), target)
    }
};

function indexForValue(arr, target) {
    console.log(arr);
    if (arr.length == 0) {
        return -1;
    }
    if (arr.length == 1) {
        // console.log("------"+ target, arr);
        return arr[0] == target ? 0 : -1;
    }
     
     let arrLen = arr.length;
     let middleIndex = Math.floor(arrLen / 2);
     if (arr[middleIndex] < target) {
         return middleIndex + indexForValue(arr.slice(middleIndex + 1), target) + 1;
     } else if (arr[middleIndex] == target) {
         return middleIndex;
     } else {
         return indexForValue(arr.slice(0, middleIndex),target)
     }
}