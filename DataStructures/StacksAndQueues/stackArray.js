///implement stack using array push() and pop()

let stack1=[];

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
console.log(stack1);

stack1.pop();
console.log(stack1);

stack1.pop();
console.log(stack1);

stack1.pop();
console.log(stack1);

stack1.pop();
console.log(stack1);

//implement stack using array unshift() and shift()
//not so efficient as it requires lot of re-indexing

let stack2=[];

stack2.unshift(100);
stack2.unshift(101);
stack2.unshift(102);
console.log(stack2);

stack2.shift();
console.log(stack2);

stack2.shift();
console.log(stack2);

stack2.shift();
console.log(stack2);


