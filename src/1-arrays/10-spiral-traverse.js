// // Recursive


// function spiralTraverseR(array) {
//     const result = [];

//     let startRow = 0;
//     let endRow = array.length - 1;
//     let startCol = 0;
//     let endCol = array[0].length - 1;

//     if (startRow <= endRow && startCol <= endCol) {
//         spiralTraverseHelper(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);
//     }

//     return result;
// }

// function spiralTraverseHelper(array, startRow, endRow, startCol, endCol, result) {
//     for (let col = startCol; col <= endCol; col++) {
//         result.push(array[startRow][col]);
//     }
//     for (let row = startRow + 1; row < endRow; row++) {
//         result.push(array[row][endCol]);
//     }
//     for (let col = endCol; col >= startCol; col--) {
//         if (startRow === endRow) break;
//         result.push(array[endRow][col]);
//     }
//     for (let row = endRow - 1; row > startRow; row--) {
//         if (startCol === endCol) break;
//         result.push(array[row][startCol]);
//     }
// } 


// Iterative
// T: O(n*m) | S: O(n*m)
// where n = array length and m = nested array length

function spiralTraverse(array) {
    const result = [];

    let startRow = 0;
    let endRow = array.length - 1;
    let startCol = 0;
    let endCol = array[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col]);
        }
        for (let row = startRow + 1; row < endRow; row++) {
            result.push(array[row][endCol]);
        }
        for (let col = endCol; col >= startCol; col--) {
            if (startRow === endRow) break;
            result.push(array[endRow][col]);
        }
        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol) break;
            result.push(array[row][startCol]);
        }

        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }

    return result;
}



arr1 = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
];

arr2 = [
    [1, 2, 3, 4, 5],
    [14, 15, 16, 17, 6],
    [13, 20, 19, 18, 7],
    [12, 11, 10, 9, 8],
];

arr3 = [
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9],
];

console.log(spiralTraverse(arr1));
console.log(spiralTraverse(arr2));
console.log(spiralTraverse(arr3));

// console.log(spiralTraverseR(arr1));
// console.log(spiralTraverseR(arr2));
// console.log(spiralTraverseR(arr3));