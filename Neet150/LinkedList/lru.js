class Node {
    /**
     * @param {number} key
     * @param {number} val
     */
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap=capacity;
        this.cache=new Map();
        this.right=new Node(0,0);
        this.left=new Node(0,0);
        this.right.prev=this.left;
        this.left.next=this.right;

    }
    remove(node){
        const prev=node.prev;
        const next=node.next;
        prev.next=next;
        next.prev=prev;
    }

    //helper-insert

    insert(node){
        const prev=this.right.prev;
        prev.next=node;
        node.prev=prev;
        node.next=this.right;
        this.right.prev=node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key){
        if(this.cache.has(key)){
            const node=this.cache.get(key);
            //update lru posn towards right
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }
    //insert new one in cache & DLL
    put(key,val){
        if(this.cache.has(key)){
            this.remove(this.cache.get(key));
        }
        const newNode=new Node(key,val);
        this.cache.set(key,newNode);
        this.insert(newNode);
        
        //If cap exceeded,remove from cache & DLL
        if(this.cache.size>this.cap){
            const lru=this.left.next
            this.remove(lru);
            this.cache.delete(lru.key);
        }

    }
}
