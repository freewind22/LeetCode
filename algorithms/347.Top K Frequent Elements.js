/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = {}, list = [], ret = [], count;

    nums.forEach(function(v){
        if(!map[v])
            map[v] = 0;
        map[v]++;
        count = map[v];
        if(!list[count])
            list[count] = '';
        list[count] += v + ',';
    });
    map = {};
    list = list.join('').split(',').reverse();
    for(var i = 0, v; i < list.length && ret.length < k; i++){
        v = parseInt(list[i], 10);
        if(!isNaN(v) && !map[v]){
            map[v] = true;
            ret.push(v);
        }
    }

    return ret;
};
