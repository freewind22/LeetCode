/**
 * @param {number[]} nums
 * @return {boolean}
 * 先找到前2个数,如果出现比前2个数还小的则替换掉
 */
var increasingTriplet = function(nums) {
    if(nums.length < 3) return false;
    
    var a = nums[0], b = 0, c = a, len = nums.length;
    for(var i = 1; i < len; i++){
        if(nums[i] > a){
            b = nums[i];
            break;
        }else if(nums[i] < a){
            a = nums[i];
        }
    }
    for(i += 1; i < len; i++){
        if(nums[i] > b){
            return true;
        }
        if(nums[i] > a){
            b = nums[i];
        }else if(nums[i] < a){
            if(nums[i] < c){
                c = nums[i];
            }else if(nums[i] > c){
                a = c;
                b = nums[i];
            }
        }
    }
    
    return false;
};
