//Sorting

/* function groupAnagrams(strs) {

    let res={};

    for(let str of strs){

        let sortedStr=str.split('').sort().join('');

        if(!res[sortedStr]){
            res[sortedStr]=[];
        }
        res[sortedStr].push(str);
    }
    return Object.values(res);

} */

function groupAnagrams(strs) {

    let res={};

    for(let str of strs){

        let arr=new Array(26).fill(0);

        for(let s of str){
            arr[s.charCodeAt(0)-'a'.charCodeAt(0)]++;

        }
        let code=arr.join('');
        
        if(!res[code]){
            res[code]=[];
        }
        res[code].push(str);
    }
    return Object.values(res);

}   



console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));
 //Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

console.log(groupAnagrams( ["x"]));

//Output: [["x"]]

console.log(groupAnagrams( [""]));

//Output: [[""]]