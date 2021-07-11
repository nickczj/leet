class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let result;
    // let result = l1.val < l2.val ? l1 : l2;
    if (l1.val < l2.val)
    {
        result = l1;
        l1 = l1.next;
    }
    else
    {
        result = l2;
        l2 = l2.next;
    }
    let i = result.val;
    while (l1 || l2)
    {
        if (l1 < l2)
        {

        }
    }

    return result;
}

const mergeTwoListsNick = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  if (!l1 && !l2) return l1
  else if (!l1) return l2
  else if (!l2) return l1

  let result: ListNode

  if (l1.val < l2.val) result = l1
  else result = l2

  while (l1 && l2) {
    if (l1.val < l2.val) {
      result.next = l1
      l1 = l1.next
    } else {
      result.next = l2
      l2 = l2.next
    }
    result = result.next
  }
  if (l1) result.next = l1
  if (l2) result.next = l2

  return result
}

function mergeTwoListsHM(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) return l1;
  if (l1 && !l2) return l1;
  if (!l1 && l2) return l2;
  let result = new ListNode();
  let current = result;

  while(l1 || l2) {
      if (!l1) {
          current.next = l2;
          l2 = l2.next;
      } else if (!l2) {
          current.next = l1;
          l1 = l1.next;
      } else if (l1.val <= l2.val) {
          current.next = new ListNode(l1.val);
          l1 = l1.next;
      } else {
          current.next = new ListNode(l2.val);
          l2 = l2.next;
      }
      current = current.next;
  }
  
  current.next = l1 || l2;
  return result.next;
  
};

function mergeTwoListsFion(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let result: ListNode;
  if (l1 === null)
  {
      return l2;
  }
  else if (l2 === null)
  {
      return l1;
  }
  if (l1.val < l2.val)
  {
      result = l1;
      l1 = l1.next;
  }
  else
  {
      result = l2;
      l2 = l2.next;
  }
  let curr = result;
  while (l1 !== null || l2 !== null)
  {
      if (l1 == null)
      {
          curr.next = l2
          l2 = l2.next
      }
      else if (l2 == null)
      {
          curr.next = l1
          l1 = l1.next
      }
      else if (l1.val < l2.val)
      {
          curr.next = l1
          l1 = l1.next
      }
      else
      {
          curr.next = l2
          l2 = l2.next
      }
      curr = curr.next
  }

  return result;
};