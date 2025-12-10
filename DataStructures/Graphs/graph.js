class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        //checks if vertex already exist,then dont add again
        if(!this.adjacencyList[vertex])  this.adjacencyList[vertex]=[];

    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);

    }
    removeEdge(v1,v2){
        this.adjacencyList[v1]=this.adjacencyList[v1].filter( v=>v!==v2 );
        this.adjacencyList[v2]=this.adjacencyList[v2].filter( v=>v!==v1 );
    }
    removeVertex(v){  // different from Colt's solution
        let vArray=this.adjacencyList[v];
        for(let i of vArray){
            this.removeEdge(v,i);

        }
        delete this.adjacencyList[v];
    }
}

let g = new Graph();
g.addVertex("India");
g.addVertex("Tokyo");
g.addVertex("Japan");
g.addVertex("China");
g.addEdge("Tokyo", "India");
g.addEdge("Tokyo", "China");
g.addEdge("India", "Japan");
g.removeVertex("India")
console.log(g)

