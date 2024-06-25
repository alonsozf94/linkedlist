class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor(head = null) {
    this._head = head;
  }

  // Getter
  get head() {
    return this._head;
  }
  set head(node) {
    this._head = node;
  }

  // Method
  prepend(value) { // Add first
    this.head = new Node(value, this.head);
  }
  append(value) { // Add last
    if (this.head == null) this.head = new Node(value);
    else {
      let temp = this.head;
      while (temp.next != null) temp = temp.next;
      temp.next = new Node(value);
    }
  }
  size() {
    let count = 0;
    let temp = this.head;
    while (temp != null) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  tail() {
    let temp = this.head;
    while (temp.next != null) temp = temp.next;
    return temp;
  }
  findAt(index) {
    let i = 0;
    let node = this.head;

    if (index >= this.size()) return "Out of range";
    while (node != null && i != index) {
      console.log("Current " + node.value);
      node = node.next;
      i++;
    }
    return node
  }
  pop() {
    let node = this.head;

    while (node != null) {
      if (node.next.next == null) { // si el sgt es el ultimo
        node.next = null;  // el ultimo se vuelve null
        break; // se termina el loop ya se borro el ultimo
      }
      node = node.next;
    }
    return node
  } 
  contains(value) {
    let itContains = false;
    let node = this.head;

    while (node != null) {
      if (node.value === value) {
        itContains = true;
        break;
      }
      node = node.next;
    }
    return itContains
  }
  find(value) {
    let index = 0;
    let node = this.head;
    
    while (node != null) {
      if (node.value === value) {
        break;
      }
      index++;
      node = node.next;
    }
    return index;
  }
  insertAt(index, value) {
    let i = 0;
    let node = this.head;

    if (index > this.size()) return "Out of range";
    if (index == 0) {
      this.prepend(value);
      return 1
    }
    while (node != null) {
      if (index == i + 1) {
        let displacedNode = node.next; 
        node.next = new Node(value, displacedNode);
        break;
      }
      node = node.next;
      i++;
    }
    return 1;
  }
  removeAt(index) {
    let i = 0;
    let node = this.head;
    if (index == 0) {
      this.head = node.next;
      node = null;
      return 1
    }
    while (node != null) {
      if (index == i + 1) {
        let displacedNode = node.next.next;
        node.next = null;
        node.next = displacedNode;
        break;
      }
      node = node.next;
      i++;
    }
    return 1;
  }
  // Help methods
  displayNodes() {
    console.log("Linked List");
    console.log("-----------");
    let temp = this.head;
    while (temp != null) {
      console.log(temp);
      temp = temp.next;
    }
  }
  toString() {
    let string = "";
    let node = this.head;
    while (node != null) {
      if (node.next != null) string += `${node.value} -> `
      else string += `${node.value}`
      node = node.next;
    }

    return string;
  }
}

let myLinkedList = new LinkedList();
myLinkedList.append("A");
myLinkedList.append("E");
myLinkedList.append("I");
myLinkedList.append("O");
myLinkedList.append("U");
myLinkedList.displayNodes();
console.log(`Size: ${myLinkedList.size()}`);
console.log(`Head Node: ${JSON.stringify(myLinkedList.head.value)}`);
console.log(`Tail Node: ${JSON.stringify(myLinkedList.tail().value)}`);
console.log("Find at 3");
console.log("-------");
console.log(myLinkedList.findAt(3));
console.log(`Before Pop: ${myLinkedList.toString()}`);
myLinkedList.pop();
console.log(`After Pop: ${myLinkedList.toString()}`);
console.log(`Contains A?: ${myLinkedList.contains('A')}`);
console.log(`Contains Z?: ${myLinkedList.contains('Z')}`);
console.log(`A is at index ${myLinkedList.find('A')}`);
console.log(`O is at index ${myLinkedList.find('O')}`);
myLinkedList.insertAt(1,"X");
console.log(`After X insert at 1: ${myLinkedList.toString()}`);
myLinkedList.insertAt(0,"Y");
console.log(`After Y insert at 0: ${myLinkedList.toString()}`);
myLinkedList.insertAt(6,"Z");
console.log(`After Z insert at 6: ${myLinkedList.toString()}`);
myLinkedList.removeAt(0)
console.log(`After remove at: ${myLinkedList.toString()}`);