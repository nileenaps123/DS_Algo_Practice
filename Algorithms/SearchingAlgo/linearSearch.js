function linearSearch(arr,elem){
    for (let i=0;i<arr.length;i++){
        if (arr[i]===elem) return i
        else continue
    }
    return -1
}


console.log(linearSearch([1,2,3],4))