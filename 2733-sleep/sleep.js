/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise( function(res,rej){ setTimeout(res,millis); } );
}

//return new Promise(); ab ismein saare generic format use karke answer de do
// sirf res likhte toh bhi ho jaata kyunki , as per the question humein har baar resolve hi karaana hai

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */