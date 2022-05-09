// const sampleData = [
//     [1,4,7,11,15],
//     [2,5,8,12,19],
//     [3,6,9,16,22],
//     [10,13,14,17,24],
//     [18,21,23,26,30]
// ];
const sampleData = [[5]];
const target = 4;

var findNumberIn2DArray = function(matrix, target) {
    if (matrix == null || matrix.length == 0) {
        return false;
    }
    if (matrix[0].length == 0) {
        return false;
    }
    //当前第几行
    let rowIndex = 0;
    //数组列数
    const colCount = matrix[0].length;
    //数组行数
    const rowCount = matrix.length;
    while (rowIndex < rowCount) {
        console.log("begin rowIndex:", rowIndex);
        const currentRowNums = matrix[rowIndex];
        //当前第几列 从最后一列开始
        let colIndex = colCount - 1; 
        while (colIndex >= 0) {
            console.log("begin colIndex:---", colIndex);
            let currentNum = currentRowNums[colIndex];
            if (currentNum == target) {
                return true;
            } 
            if (currentNum < target) {
                rowIndex++;
                colIndex = colCount - 1; 
                break;
            } 
            if (colIndex == 0) {
                rowIndex++;
            }
            colIndex--;
        }
    }
    return false;        
 };

console.log(findNumberIn2DArray(sampleData, target));