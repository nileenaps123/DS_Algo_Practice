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

    //dfs graph traversal-recursive

    depthFirstRecursive(start){

        let result=[];
        let visitFlag={};
        const adjacencyList = this.adjacencyList;

        function DFS(vertex){
            if(!vertex) return null ;

            result.push(vertex);
            visitFlag[vertex]=true;

            adjacencyList[vertex].forEach(neighbour=>{
                if(!visitFlag[neighbour]) return DFS(neighbour);
            });
        }
        DFS(start);

        return result;
    }
}

/* let g = new Graph();
g.addVertex("India");
g.addVertex("Tokyo");
g.addVertex("Japan");
g.addVertex("China");
g.addEdge("Tokyo", "India");
g.addEdge("Tokyo", "China");
g.addEdge("India", "Japan");
g.removeVertex("India")
console.log(g) */

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g)
console.log(g.depthFirstRecursive("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F


