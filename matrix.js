

// let mat = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ]

// left diagonal: 


// for(let i = 0; i<=mat.length-1; i++){
//     // mat[0], mat[1], mat[2]

//      for(let j = 0; j<=mat[i].length-1; j++){
//          if(i == j ){
//             console.log(mat[i][j])
//          }
//      }


// }

// for(let i = 0; i<=mat.length-1; i++){
//     // console.log(mat[0][0])
//     // console.log(mat[1][1])
//     // console.log(mat[2][2])
//     console.log(mat[i][i])
// }




//     00 01 02
//     10 11 12
//     20 21 22


//    left :  00 , 11, 22, i == j 

//    right: 02, 11, 20 ,  i+j == l-1
// i = 0 , j = l - 1-i => 2
// i = 1, j = l - 1 - 1 => 1



let mat = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]


// for(let i = 0; i<=mat.length-1; i++){
    
//     for(let j = 0; j<=mat[i].length-1; j++){
//          if(i+j == mat.length-1){
//             console.log(mat[i][j])
//          }
//     }
// }
// let l = 3
for(let i = 0; i<=mat.length-1; i++){
    
    // console.log(m[0][l-1-0])
    // console.log(m[1][l-1-1])
    // console.log(m[2][l-1-2])

    console.log(mat[i][mat.length-1-i])
}