// T: O(n) | S: O(1)
// where n = number of nodes in the linked list

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;

  while (currentNode) {
    let nextNode = currentNode.next;
    while (nextNode && currentNode.value === nextNode.value) {
      nextNode = nextNode.next;
    }

    currentNode.next = nextNode;
    currentNode = currentNode.next;
  }
  
  return linkedList;
}

// function removeDuplicatesFromLinkedList(linkedList) {
//   let currentNode = linkedList;

//   while (currentNode && currentNode.next) {
//     while (currentNode.value === currentNode.next.value) {
//       removeNextNode(currentNode);
//       if (!currentNode.next) break;
//     }
//     currentNode = currentNode.next;
//   }

//   return linkedList;
// }

// function removeNextNode(currentNode) {
//   if (!currentNode || !currentNode.next) return undefined;

//   if (!currentNode.next.next) {
//     currentNode.next = null;
//   }
//   else {
//     currentNode.next = currentNode.next.next;
//   }

//   return currentNode;
// }


// LinkedList class object
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  showArray() {
    let array = [];

    let currentNode = this;
    while (currentNode) {
      const nodeObj = new Map([["value", currentNode.value]]);
      if (currentNode.next) nodeObj.set("next", currentNode.next.value);
      else nodeObj.set("next", null);

      array.push(nodeObj);
      currentNode = currentNode.next;
    }

    return array;
  }
}


// function for generating linkedlist from an array.
function generateLL(arrayOfValues) {
  const newLL = new LinkedList(arrayOfValues[0]);
  let currentNode = newLL;
  
  for (let i = 1; i < arrayOfValues.length; i++) {
    currentNode.next = new LinkedList(arrayOfValues[i]);
    currentNode = currentNode.next;
  }
  currentNode.next = null;
  
  return newLL;
}



/***** TEST *****/
// TC 1
const ll1Values = [1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6];
const ll1 = generateLL(ll1Values);

console.log(ll1);
console.log(ll1.showArray());
console.log(removeDuplicatesFromLinkedList(ll1).showArray());


// TC2
const ll2Values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 7, 7, 7, 10, 10];
const ll2 = generateLL(ll2Values);

console.log(ll2);
console.log(ll2.showArray());
console.log(removeDuplicatesFromLinkedList(ll2).showArray());