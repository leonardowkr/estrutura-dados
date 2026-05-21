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

  push(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    this.size++;
  }

  pop() {}

  print() {
    if (this.head === null) {
      return;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  removeAt() {}

  at(index) {
    if(index < 0 || index > this.size - 1){
        return null;
    }
    if(this.head === null){
        return null;
    }
    while(currentIndex !== index){
        currentIndex++;
        currentNode = currentNode.next;
    }
    let currentIndex = 0;
  }

  reverse() {}

  peek(value){
    if(){

    }
    let currentNode = this.head;
    
    while(currentNode.next !== null){
        currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}

const lista = new LinkedList();

lista.push(10);
lista.push(15);
lista.push(20);
lista.push(17);
lista.push(5);
lista.push(3);
lista.push(7);

lista.print();