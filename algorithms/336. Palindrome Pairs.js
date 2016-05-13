/**
 * @param {string[]} words
 * @return {number[][]}
 * 一开始用2重循环会超时.
 * 后改用哈希表存储头,尾单词表,在头或尾匹配下才检测.勉强能过.1500+ms
 */
function isPalindrome (word){
    var len = word.length;
    if(len === 0) return false;
    if(len === 1) return true;
    
    for(var i = 0, m = parseInt(len / 2); i < m; i++){
        if(word[i] != word[len-i-1]){
            return false;
        }
    }
    return true;
}
function getPalindrome(words, len){
    var ret = [];
    for(var i = 0; i < len; i++){
        if(isPalindrome(words[i])){
            ret.push(i);
        }
    }
    return ret;
}
var palindromePairs = function(words) {
    var ret = [], mapF = {}, mapL = {}, P = null, pl, ll;
    var len = words.length, word, list;
    for(var f, l, i = 0, j, k; i < len; i++){
        word = words[i];
        if(word === ""){
            if(P === null){
                P = getPalindrome(words, len);
                pl = P.length;
            }
            for(j = 0; j < pl; j++){
                ret.push([i, P[j]]);
                ret.push([P[j], i]);
            }
            continue;
        }
        
        f = word[0], l = word[word.length - 1];

        if(mapF[l]){
            list = mapF[l], ll = list.length;
            for(j = 0; j < ll; j++){
                if(isPalindrome(words[list[j]] + word)){
                    ret.push([list[j], i]);
                }
            }
        }
        if(mapL[f]){
            list = mapL[f], ll = list.length;
            for(j = 0; j < ll; j++){
                if(isPalindrome(word + words[list[j]])){
                    ret.push([i, list[j]]);
                }
            }
        }
        if(!mapF[f]) mapF[f] = [];
        if(!mapL[l]) mapL[l] = [];
        
        mapF[f].push(i);
        mapL[l].push(i);
    }
    return ret;
};
