/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) { // this function is taking another function as an input
    let new_arr=[];
    let n= arr.length;
    for(let i=0; i<n;i++){
        new_arr.push(fn(arr[i],i));
    }
    return new_arr;
};