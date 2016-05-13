/**
 * @param {number} n
 * @return {number}
 * 看提示找到规律,分解成3得到的结果最大
 */
var integerBreak = function(n) {
    var ret = [0, 0, 1, 2, 4];
    if(n < ret.length){
        return ret[n];
    }
    var d = parseInt(n / 3), c = n % 3;

    if(c == 1){
        d--;
        c += 3;
    }else if(c === 0){
        c = 1;
    }
    return Math.pow(3, d) * c;
};
