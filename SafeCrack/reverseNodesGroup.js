function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(1, new ListNode(2));

var reverseKGroup = function (head, k) {
  let current = head;
  let beforeGroupNode = null;
  let afterGroupNode = null;
  let nodesToReverse = [];
  let counter = 1;

  while (current) {
    nodesToReverse.push(current);
    afterGroupNode = current.next;

    if (counter % k === 0) {
      nodesToReverse = nodesToReverse.reverse();
      if (!beforeGroupNode) {
        head = nodesToReverse[0];
      } else {
        beforeGroupNode.next = nodesToReverse[0];
      }
      nodesToReverse.forEach((node, index) => {
        const nextNode = nodesToReverse[index + 1];
        node.next = nextNode ?? afterGroupNode;
      });
      beforeGroupNode = nodesToReverse[nodesToReverse.length - 1];
      current = beforeGroupNode;
      nodesToReverse = [];
    }

    current = current.next;
    counter++;
  }
  return head;
};

reverseKGroup(head, 2);
