// Node class representing each element in the linked list
class Node {
  constructor(data) {
    this.data = data; // The data value of the node
    this.next = null; // The pointer to the next node, initially null
  }
}

// LinkedList class to manage the linked list operations
class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null; // The head node of the list, initially null
  }

  // Method to add a node at the end of the list
  addAtHead(data) {
    let newNode = new Node(data);

    // If the list is empty, the new node becomes the head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Traverse the list to find the last node
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAtTail(data) {
    let newNode = new Node(data);
    if (this.head == null) return (this.head = newNode);

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }

  insertAtPosition(data, pos) {
    let newNode = new Node(data);
    if (pos == 0) return this.addAtHead(data);
    if (pos == this.size) return this.insertAtTail(data);
    // Traverse the list until the position is found or we reach the end
    let current = this.head;
    let previous = null;
    let index = 0;
    while (current !== null && index < pos) {
      previous = current;
      current = current.next;
      index++;
    }

    // Insert the new node at the correct position
    newNode.next = current;
    previous.next = newNode;
    this.size++;
  }

  // deleting from head
  deleteAtHead() {
    if (!this.head) return "no item present in list";
    if (this.head == 0) {
      this.head = null;
    }
    this.head = this.head.next;
    this.size--;
  }

  deleteAtLast() {
    if (!this.head) return "no item present in list";
    // If there's only one node in the list
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let current = this.head;
    let previous = null;
    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.size--;
  }

  delateAtPosition(pos) {
    if (pos == 0) return this.deleteAtHead();
    if (pos == this.size) return this.deleteAtLast();

    let current = this.head;
    let previous = null;
    let i = 0;
    while (i < pos) {
      i++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
    return;
  }

  checkSize() {
    return this.size;
  }
  // Method to print the list
  printList() {
    let current = this.head;
    let listStr = "";

    while (current) {
      listStr += current.data + " -> ";
      current = current.next;
    }

    console.log(listStr + "null");
  }
}

// Example usage:
let list = new LinkedList();
list.addAtHead(10);
list.addAtHead(20);
list.addAtHead(30);
list.addAtHead(40);
list.printList();

list.insertAtTail(50);
list.insertAtTail(60);
list.printList();

list.insertAtPosition(100, 2);
list.printList();

list.deleteAtHead();
list.printList();

list.deleteAtLast();
list.printList();
console.log(list.checkSize());

list.delateAtPosition(2);
list.printList();
console.log(list.checkSize());
