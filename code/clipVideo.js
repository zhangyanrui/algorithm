/*
剪视频
int[][] = {{0,2}, {4,8}, {1,6} , {5,6}};
int mergeClips(int[][] , int duration);

不能拼出 则返回-1
能拼出 则返回最小的片段个数 

dur = 8 ； res = 3
dur = 9 ;    res  = -1
*/
function mergeClips(clips, duration) {
    // 左边界排序
    let items = clips.sort((item1, item2) => {
        if (item1[0] > item2[0]) {
            return 1;
        }
        return -1
    });
    // 判断左边界是否为0
    let left = items[0][0];
    if (left != 0 ) {
        return -1;
    }
    
    // 右边界开始贪心
    let right = items[0][1];
    if (right >= duration) {
        return 1;
    }
    // 初始化最小count
    let miniCount = 1;
    for (let index = 0; index < items.length; index++) {
        
        let maxRight = right;        
        let nextIndex = index + 1;        
        if (nextIndex >= items.length) {
            break;
        }

        let next = items[nextIndex];        
        
        // 当前最右值 与下一个左侧值不重合  代表断掉了
        if (right < next[0]) {
            break;
        }
        // 计算与当前item有交集的最右边界
        while(right >= next[0]) {// next的左边界与当前最右边界有交集  取有交集里面的最右边界
            maxRight = Math.max(maxRight, next[1]);
            nextIndex++;
            if (nextIndex >= items.length) {
                break;
            }   
            next = items[nextIndex];
        }
        right = maxRight;
        miniCount++;
        if (maxRight >= duration) {
            return miniCount;
        }   
    }
    if (right < duration) {
        return -1;
    }
    return miniCount;
}

// 此方法 使用 “前缀和” 可以试探最右边界，但是无法拿到片段数
function mergeClips1(clips, duration) {
    let temp = [];
    clips.forEach(subArr => {
        if (temp[subArr[0]]) {
            temp[subArr[0]]++;
        } else {
            temp[subArr[0]] = 1;
        }
        const index = ++subArr[1];
        temp[index] = temp[index] ? temp[index] -1 : -1;
    });

    let right = 0;
    let sum = 0;

    for (let index = 0; index < temp.length; index++) {
        const element = temp[index];
        if (element) {
            sum += element;
        }
        if (sum < 1) {
            break;
        } else {
            right = index;
        }
    }
    if (right < duration) {
        return -1;
    }
    return right;
}


const result = mergeClips([[0, 10], [14, 18], [10, 16], [5, 6]], 17);
console.log(result);
