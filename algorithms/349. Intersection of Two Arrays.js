/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var map = {}, col = {}, ret = [];
    nums1.forEach(function(v){
        map[v] = true;
    });
    nums2.forEach(function(v){
        if(map[v]){
            col[v] = true;
        }
    });
    for(var key in col){
        ret.push(parseInt(key, 10));
    }
    return ret;
};
