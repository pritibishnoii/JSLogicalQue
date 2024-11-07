class Stack{
    constructor(){
        this.stack=[];
        this.minStack=[];
        this.size=0;
        this.top=-1;
        this.size=0

    }

    push(val){
        this.top++;
        this.stack[this.top]= val;
        this.size++;
        if(this.minStack.length==0 || val<=this.minStack.at(-1)){
            this.minStack[this.top]=val;
        }
        return this.stack
        // return this.minStack
    }


    pop(){
        let elm= this.stack[this.top];
        this.top--;
        this.size--;
        if(elm==this.stack[this.top]){
           this.minStack[this.top];
        }
        return elm;f
    }

    getMin(){
        return this.minStack[this.top];
         
    }
}


let stk = new Stack();
console.log(stk.push(10))
console.log(stk.push(8))
console.log(stk.push(12))
console.log(stk.push(9))
// console.log(stk.pop())
console.log(stk.getMin())