/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let x= init;
    let n=nums.length;
    if (n===0) return init;

    for(let i=0;i<n;i++){
        x=fn(x,nums[i]);
    }
    return x;

};