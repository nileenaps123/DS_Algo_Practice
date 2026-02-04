//Using two stacks
//TC O(1) for all operations ,SC -O(n)


class MinStack{
    constructor(){
        this.stack=[];
        this.minStack=[];
    }

    push(val){
        this.stack.push(val);
        let minVal=Math.min(val,this.minStack.length===0?
                                val:this.minStack[this.minStack.length-1]    
        );
        this.minStack.push(minVal);
    }

    pop(){
        this.stack.pop();
        this.minStack.pop();
    }

    top(){
        return this.stack[this.stack.length-1];
    }
    getMin(){
        return this.minStack[this.minStack.length-1];
    }
}

const minStack=new MinStack();

minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin()); // return 0
minStack.pop();
console.log(minStack.top());    // return 2
console.log(minStack.getMin()); // return 1