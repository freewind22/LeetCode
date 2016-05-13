/**
 * @param {number} num
 * @return {number[]}
 * 根据提示发现有规律, 2^3后在前面的基础上加个数
 */
var countBits = function(num) {
    var ret = [0, 1, 1, 2, 1, 2, 2, 3], s = ret.length;
    if(num < s){
        return ret.splice(0, num + 1);
    }
    var pow1 = s, pow2, k;
    for(var i = s, n; i <= num; i++){
        if(i == pow1){
            ret.push(1);
            pow2 = pow1;
            pow1 *= 2;
            k = pow2 / 2;
        }else{
            n = i - pow2;
            base = parseInt(n / k) + 1;
            n -= (base - 1) * k;
            ret.push(ret[n] + base);
        }
    }
    return ret;
};
