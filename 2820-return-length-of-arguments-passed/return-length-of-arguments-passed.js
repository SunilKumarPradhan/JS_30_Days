/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let k= args.length;

    return k;
    
};

/**
 * argumentsLength(1, 2, 3); // 3
 */