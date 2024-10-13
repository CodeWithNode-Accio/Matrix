
let mat = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]


// transpose the matrix

// [
//     [10, 40, 70],
//     [20, 50, 80],
//     [30, 60, 90]
// ]

let tarMatrix = [
    // [10, 40, 70],
    // [20, 50, 80],
    // [30, 60, 90]
]


for(let i = 0; i<=mat.length-1; i++){ // 1
     let arr = [] // [20, 50, 80]
    for(let j = 0; j<=mat[i].length-1; j++){ // 0, 1, 2
          arr.push(mat[j][i])
    }

    tarMatrix.push(arr)
    // arr = []



}
console.log(tarMatrix)