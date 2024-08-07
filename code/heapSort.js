
/*
大顶堆：
第一个非叶子节点 n / 2  - 1

arr[i] > arr[2i + 1] && arr[i] > arr[2i + 2];

             6
        2        5
     1    0    3    4 
从第一个非子节点 逆序 堆化
*/

const nums = [12, 124, 1, 311, 54, 6, 23];
console.log(heapSort(nums));

function heapSort(array) {
    let result = [];
    while (array.length > 0) {
        buildBigHeap(array);
        result.push(array.splice(0, 1)[0]);
    }
    return result;
}

function buildBigHeap(array) {
    let arrLen = array.length;
    if (arrLen < 2) {
        return array;
    }

    let startIndex = Math.floor(array.length / 2 - 1);

    while (startIndex >= 0) {
        let starValue = array[startIndex];
        let leftIndex = startIndex * 2 + 1;
        let rightIndex = startIndex * 2 + 2;
        if (arrLen > rightIndex) {
            if (array[rightIndex] > starValue) {
                let temp = array[rightIndex];
                array[rightIndex] = starValue;
                starValue = temp;
                array[startIndex] = starValue;
            }
        }
        if (arrLen > leftIndex) {
            if (array[leftIndex] > starValue) {
                let temp = array[leftIndex];
                array[leftIndex] = starValue;
                starValue = temp;
                array[startIndex] = starValue;
            }
        }
        startIndex--;
    }
}