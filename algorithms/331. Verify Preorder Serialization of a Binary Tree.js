/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    var tree = preorder.split(','), len = tree.length;
    var pos = 0, v ,list = [], leaf = [];
    if(preorder === '' || len == 2) return false;
    
    leaf.push(tree[pos++]);
    while(leaf.length > 0){
        v = leaf.shift();
        if(v != '#'){
            if(pos + 2 > len) return false;
            leaf.push(tree[pos++]);
            leaf.push(tree[pos++]);
        }
    }
    return pos == len;
};
