/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var map = {}, max = 0, ch, sublen, last = 0;
    for(var i = 0, len = s.length; i < len; i++){
        ch = s.charAt(i);
        if(typeof map[ch] != 'undefined'){
            sublen = i - last;
            if(sublen > max)
                max = sublen;
                
            if(map[ch] + 1 > last)
                last = map[ch] + 1;
        }
        map[ch] = i;
    }

    sublen = len - last;
    if(sublen > max){
        max = sublen;
    }
    return max;
};
