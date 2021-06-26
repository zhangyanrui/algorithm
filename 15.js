/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) {
        return [];
    }
    nums.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        return -1;
    });
    console.log(nums);

    let result = [];
    let left = 0;
    // 将三个数的问题通过一个for循环 降维成一个两个数的问题
    while (left <= nums.length - 3 && nums[left] <= 0) {

        let sumEquelLeftArr = sumTargetForArray(nums.slice(left + 1), 0 - nums[left],);

        let find = false;
        for (let i = 0; i < sumEquelLeftArr.length; i++) {
            const element = sumEquelLeftArr[i];
            if (element.length == 2) {
                find = true;
                result.push([nums[left], element[0], element[1]]);
            }
        }
        if (find) {
            while (left + 1 < nums.length && nums[left + 1] == nums[left]) {//滑动左重复值
                left++;
                console.log("滑动左重复值");
            }
        }

        left++;


    }
    return result;
};

// const nums = [0, 0, 0, 1, 1,1, 3, 4, 4];
// const nums = [0, 1, 1];
// const nums = [-1, -1, 0, 1, 2];
// console.log(sumTargetForArray(nums, -2));

function sumTargetForArray(array, target) {//array 有序
    console.log(0 - target, array);
    let left = 0;
    let right = array.length - 1;
    let result = [];
    while (left < right) {

        const leftV = array[left];
        const rightV = array[right];
        // console.log( "LeftIndex: ", left, "value: ", array[left]);

        if (leftV + rightV == target) { //结果成立
            result.push([leftV, rightV]);
            while (left + 1 <= right && array[left] == array[left + 1]) {//滑动左重复值
                left++;
            }
            while (right - 1 >= left && array[right] == array[right - 1]) {//滑动右重复值
                right--;
            }
            left++;
            right--;
        } else if (leftV + rightV < target) {
            left++;
        } else {
            right--;
        }

    }
    return result;
}


const nums = [-1, 0, 1, 2, -1, -4];
// const nums = [1, 1, -2];
// const nums = [-1,0,1,2,-1,-4];
// const nums = [0, 0, 0];
// const nums = [-2, 0, 2];
// const nums = [-2, 0, 0, 2, 2];
// const nums = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0];
// const nums = [0, 2, 2, 3, 0, 1, 2, 3, -1, -4, 2];
const result = threeSum(nums);
console.log(result);