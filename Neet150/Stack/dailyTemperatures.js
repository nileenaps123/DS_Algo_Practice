//O(n),O(n)
//stack--when ahigh temp comes.the last elem in stack is popped out first,followed by next lower temps
function dailyTemperatures(temperatures){

    let res=new Array(temperatures.length).fill(0);
    let stack=[];//[temp,idx]

    for(let i=0;i<temperatures.length;i++){

        const t=temperatures[i];
        while(stack.length>0 && t>stack[stack.length-1][0]){
           
            const [stackT,stackIdx]=stack.pop();
            res[stackIdx]=i-stackIdx;
        }
        stack.push([t,i])
    }
    return res;
}


console.log(dailyTemperatures([30,38,30,36,35,40,28]));//[    1, 4,    1,    2,    1,    0,    0]

console.log(dailyTemperatures([22,21,20]));//[0,0,0]