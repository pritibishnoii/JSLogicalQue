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
    this.head.prev = newNode.next;
    this.head.prev = newNode;
    this.head = newNode;
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
