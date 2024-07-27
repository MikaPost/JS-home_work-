/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) { 
    if (s.length % 2 === 1) {
        return false;
    }
    let mstack = [];
    let mobj = {"{": "}", "[": "]", "(": ")"};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in mobj) {
            mstack.push(s[i]);
        } else {
            if (mstack.length === 0) {
                return false;
            }
            let last = mstack.pop();
            if (mobj[last] !== s[i]) {
                return false;
            }
        }
    }
    return mstack.length === 0;
};