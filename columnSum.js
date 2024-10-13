
// let mat = [
//     [10,20,30], 
//     [40,50,60],
//     [70,80,90],
//     
// ]

let mat = [
    [10,20],
    [30,40],
    [50,60],
    [70,80]
]



for(let i = 0; i<=mat[0].length-1; i++){ // 0,1
  
    for(let j = 0; j<=mat.length-1; j++){ // 0 ,1
        
        console.log(mat[j][i]) 
        // m[0,0], m[1,0]
        // m[0,1], m[1,1]
        // m[0,2], m[1,2]
    }
    console.log("######")
}