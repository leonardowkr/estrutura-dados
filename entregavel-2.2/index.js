class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.size++;
    return value;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    if (this.head.next === null) {
      this.head = null;
      this.size = 0;
      return null;
    }

    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    const removedValue = currentNode.next.value;
    currentNode.next = null;
    this.size--;
    return removedValue;
  }

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  //toArray()

  removeAt(value) {}

  getSize() {}

  insertAt(value, index) {}

  getAt(index) {
    if (index < 0 || index > this.size - 1) {
      return null;
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while (index !== currentIndex) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.value;
  }

  reverse() {}

  clear() {}
}