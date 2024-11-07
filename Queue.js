class Queue{
  constructor(){
    this.queue=[]
    this.front=-1;
    this.rear=-1;
    this.size=0;
  }
  
  enqueue(elm){
    if(this.front==-1){
      this.front++;
      this.rear++;
    }
    else{
      this.rear++
    }

  
    this.queue[this.rear]= elm;
    this.size++;
    return this.queue;

  }

  dequeue(){
    if(this.front==-1){
      this.front=-1;
      this.rear=-1
    }
    let item= this.queue[this.front];
    this.front=this.front+1;
    this.size--;
    return item
   
  }

  peek(){
    let element =this.queue[this.front];
    return element
  }

  isEmpty() {
    return this.size===0
  }
}

let q= new Queue();
// console.log(q.size)
// console.log(q.isEmpty())
// console.log(q.enqueue(10))
// console.log(q.enqueue(20))
// console.log(q.enqueue(30))
// console.log(q.size)
// console.log(q.peek())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.peek())
// console.log(q.isEmpty())
// console.log(q.dequeue())
// console.log(q.isEmpty())
// console.log(q.size)

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.dequeue()
console.log(q)
console.log(q.queue);
console.log(q.rear)
console.log(q.front)
console.log(q.queue)
console.log(q.rear)
// console.log(q.dequeue())