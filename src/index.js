
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) return [];
    let matrixSort = matrix.map((e,i) => i % 2 === 0 ? e : e.reverse());
    let arr = [];
     for(let i = 0; i < matrix.length; i++){
       matrixSort[i].forEach((e) => arr.push(e))
     }
     return arr
}
