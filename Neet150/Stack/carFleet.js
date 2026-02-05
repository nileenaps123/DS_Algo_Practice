//O(nlogn ) & O(n)


function carFleet(target,position,speed){

    const pair=position.map((p,i)=>[p,speed[i]]);
    pair.sort((a,b)=>b[0]-a[0]);
    const stack=[];

    for(let [p,s] of pair ){

        let t=(target-p)/s;
        stack.push(t);

        if((stack.length>=2) && (stack[stack.length-1]<=stack[stack.length-2]))
            {
                stack.pop();
            }

    }
        
          return stack.length;
    }
  
console.log(carFleet(target = 10, position = [1,4], speed = [3,2])); //ans-1
console.log(carFleet(target = 10, position = [4,1,0,7], speed = [2,2,1,1]));//t-3,4.5,10 ,ans-3


