/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(0);
    var p = head, node, val, tag = 0;
   
    while(l1 || l2){
        val = tag;
        tag = 0;
        
        if(l1){
            val += l1.val;  
            l1 = l1.next;
        }
        if(l2){
            val += l2.val;
            l2 = l2.next;
        }
        if(val >= 10){
            val -= 10;
            tag = 1;
        }

        p.next = new ListNode(val);
        p = p.next;
    }
    if(tag > 0){
        p.next = new ListNode(tag);
    }

    return head.next;
};
