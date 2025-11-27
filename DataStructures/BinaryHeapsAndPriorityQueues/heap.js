class MaxBinaryHeap{
    constructor(){
        this.values=[41,39,33,18,27,12];
    }

    insert(val){
        this.values.push(val);
        return this.bubbleUp();
    }
    bubbleUp(){
        let idx=this.values.length-1;
        let element=this.values[idx];
        
        while(idx>0){
            let parentIdx=Math.floor((idx-1)/2);
            let parent=this.values[parentIdx];
            if(element<=parent) break;
            this.values[idx]=parent;
            this.values[parentIdx]=element;
            idx=parentIdx;
            
        }
        return this.values;
    }
}

let heap=new MaxBinaryHeap();

console.log(heap.insert(55));
console.log(heap.insert(1));
console.log(heap.insert(45));
console.log(heap.insert(199));