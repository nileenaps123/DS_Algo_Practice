class HashTable{
    constructor(size=53){
        this.keyMap=new Array(size);
    }
    _hash(key){
        const WEIRD_PRIME=31;
        let total=0;

        for(let i=0;i<Math.min(key.length,100);i++){

            let char=key[i];
            let value=(char.charCodeAt(0))-96;
            //console.log('value',value)
            total=(total*WEIRD_PRIME +value)%this.keyMap.length;
            //console.log('total',total)
            
        }
        return total;
    }
    set(key,value){
    
       let index= this._hash(key);
       //console.log('index',index);
       if (!this.keyMap[index]) {
            this.keyMap[index]=[];
       }
       this.keyMap[index].push([key,value]);

    }
    get(key){
        let index=this._hash(key);
        let nestArr=this.keyMap[index];
        for(let i=0;i<nestArr.length;i++){
            if(nestArr[i][0]===key){
                return nestArr[i][1];

            }
            
        }
        return undefined;
    }
    keys(){

        let keysArr=[];

        for (let i=0;i<this.keyMap.length;i++){
            
            if(this.keyMap[i]){
              for(let j=0;j<this.keyMap[i].length;j++){
                
                  if(!keysArr.includes(this.keyMap[i][j][0])){
                    keysArr.push(this.keyMap[i][j][0]);
                  }

              }

            }

        }
        return keysArr;
    }
        
    

    values(){
        let valuesArr=[];

        for (let i=0;i<this.keyMap.length;i++){
            
            if(this.keyMap[i]){
              for(let j=0;j<this.keyMap[i].length;j++){
                
                  if(!valuesArr.includes(this.keyMap[i][j][1])){
                    valuesArr.push(this.keyMap[i][j][1]);
                  }

              }

            }

        }
        return valuesArr;
    }
}

let ht =new HashTable();
ht.set('hi','friends');
ht.set('l love','lechu');
ht.set('pizza','lovers');
ht.set('today is','monday');
ht.set('i am ','good');
ht.set('sun is','good');
console.log(ht);

console.log(ht.keys());
console.log(ht.values());

ht.keys().forEach((key)=>{
    console.log(ht.get(key))
})