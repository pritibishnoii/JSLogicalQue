class Stack {
  constructor() {
      this.items = [];
      this.top=  -1; 
      this.size=0;
  }

  
  push(element) {
     this.top++;
     this.items[this.top]=element
     this.size++;
    // this.items.push(element);
     return this.items

  }

  
  pop() {
      if (this.isEmpty()) {
          return "Stack is empty";
      }
        let elm= this.items[this.top];
       this.top--;
       this.size--;
       return elm;
      // return this.items.pop();
  }

  top() {
      if (this.isEmpty()) {
          return "Stack is empty";
      }
      return this.items[this.items.length - 1];
  }

 
  isEmpty() {
      return this.items.size === 0;
  }
  sizeofStk() {
      return this.size;
  }

}



let stk = new Stack();
console.log(stk.isEmpty())
console.log(stk.push(10))
console.log(stk.push(12))
console.log(stk.sizeofStk());
console.log(stk.isEmpty())
console.log(stk.pop())
console.log(stk.sizeofStk());