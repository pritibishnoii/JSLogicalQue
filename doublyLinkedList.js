class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DBL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtFirst(data) {
    let newNode = new Node(data);
    if (this.head == null) return (this.head = newNode);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.size++;
  }
  addLast(data) {
    let newNode = new Node(data);
    if (this.head == null) return (this.head = newNode);
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
    this.size++;
  }

  printListData() {
    let temp = this.head;
    let listStr = "";
    while (temp) {
      listStr += temp.data + " --> ";
      temp = temp.next;
    }
    console.log(listStr, "null");
  }
}

let list = new DBL();
list.addAtFirst(10);
list.addAtFirst(20);
list.addAtFirst(30);
list.printListData();

list.addLast(50);
list.addLast(60);
list.printListData();
