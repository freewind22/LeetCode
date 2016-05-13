/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var list = s.match(/[aeiou]/ig), o = {};
    if(!list) return s;
    
    'aeiouAEIOU'.split('').forEach(function(v){
        o[v] = true;
    });
    
    var len = list.length, p = 0;
    return s.split('').map(function(v){
        if(o[v]){
            return list[len - (++p)];
        }
        return v;
    }).join('');
};
