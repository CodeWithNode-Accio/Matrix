
// Nested Arrays: 

// let  arr = [10,20,30,[40,50,60],70,80,90,100]


// 2D arrays Matrix: 


// let m = [
//     [1,2,3, 200],
//     [4,5,6, 100],
//     [7,8,9, 300]
// ]


let mat = [
    [10,20,30,100], // m[0] , m[0][0], m[0][1], m[0][2]
    [40,50,60,200],
    [70,80,90,300,]
]

// console.log(mat[0][1])

// console.log(mat[1][2])


for(let i = 0; i<=mat.length-1; i++){
    // console.log(mat[i])
    // let arr = mat[i]

    for(let j = 0; j<=mat[i].length-1; j++){
        console.log(mat[i][j])
    }
}