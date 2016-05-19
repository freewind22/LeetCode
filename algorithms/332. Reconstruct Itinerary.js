/**
 * @param {string[][]} tickets
 * @return {string[]}
 * 先按终点排序,再用回溯查找
 */
function Node(value, flag){
    this.value = value;
    this.flag = flag;
}
var findItinerary = function(tickets) {
    var G = {}, start, end, AR = {}, ret = [], isFound = false, count = tickets.length + 1;

    tickets.sort(function(a, b){return a[1].localeCompare(b[1]);});
    tickets.forEach(function(v, i){
        start = v[0], end = v[1];
        if(!G[start]){
            G[start] = [];
        }
        G[start].push(new Node(end, false));
    });
    function _find(start){
        if(!G[start]){
            return;
        }
        for(var i = 0, node; i < G[start].length; i++){
            node = G[start][i];
            if(!node.flag){
                ret.push(node.value);
                node.flag = true;
                if(ret.length == count){
                    isFound = true;
                }else{
                    _find(node.value);
                }
                if(isFound) return;
                
                node.flag = false;
                ret.pop();
            }
        }
    }
    start = "JFK";
    ret.push(start);
    _find(start);
    
    return ret;
};
