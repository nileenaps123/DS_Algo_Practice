class TimeMap{

    constructor(){
        this.keyStore=new Map();
    }

    set(key,value,timestamp){
        if(!this.keyStore.has(key)){
            this.keyStore.set(key,[]);
        }
        this.keyStore.get(key).push([value,timestamp]);
    }

    get(key,timestamp){

        let res='';
        let values=this.keyStore.get(key)||[];
        let l=0,r=values.length-1;
        let m;

        while(l<=r){
            m=Math.floor(l+((r-l)/2));

            if(values[m][1]<=timestamp){
                res=values[m][0];
                l=m+1;

            }else{
                r=m-1

            }

        }
        //console.log(m)
        return res;
    }
}

const timeMap=new TimeMap();

timeMap.set("alice", "happy", 1);
console.log(timeMap.get("alice", 1));
console.log(timeMap.get("alice", 2));
timeMap.set("alice", "sad", 3);
console.log(timeMap.get("alice", 3));

