/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let is_called=false;
    
    return function(...args){
        if(!is_called){
            //any action we want to trigger via single function call
            is_called=true; // changed the flag to serve the purpose
            return fn.apply(this,args); // finally apply the requisite function
        }
        return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
