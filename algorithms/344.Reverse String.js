/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    //return s.split('').reverse().join('');
    var ret = [];
    for(var i = s.length - 1; i >= 0; i--){
        ret.push(s[i]);
    }
    return ret.join('');
};
