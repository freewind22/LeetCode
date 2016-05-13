/**
 * @param {number} num
 * @return {boolean}
 * 根据二进制位的特征来判断.
 */
var isPowerOfFour = function(num) {
    if(num == 1)
        return true;
    if(num & 1)
        return false;
    num = num >> 1;
    while(num > 0){
        if((num | 2) == 2)
            return true;
        if((num & 3) !== 0)
            return false;
        num = num >> 2;
    }
    return false;
};
