/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function (headA, headB) {
    if (headA === headB) return headA;
    function pushNode(list, stack) {
        while (list) {
            stack.push(list);
            list = list.next;
        }
    }
    let stackA = [];
    let stackB = [];
    pushNode(headA, stackA);
    pushNode(headB, stackB);
    let resultNode = null;
    let loopTime = Math.min(stackA.length, stackB.length)
    for (let i = 0; i < loopTime; i++) {
        let nodeA = stackA.pop();
        let nodeB = stackB.pop();
        console.log(nodeA.val === nodeB.val, nodeA.val, nodeB.val)
        if (nodeA === nodeB) {
            resultNode = nodeA;
        }else{
            break;
        }
    }
    return resultNode;
};