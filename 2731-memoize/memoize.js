/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const map=new Map();
    
    return function(...args) {
        let key=JSON.stringify(args); // we developed the arguement string , where each value will be used for key
        if(map.has(key)) return map.get(key);
        else {
            let new_key= fn(...args);
            map.set(key,new_key);
            return new_key;
        }
        
    }
}

//below this the way how this function might have been used.
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */