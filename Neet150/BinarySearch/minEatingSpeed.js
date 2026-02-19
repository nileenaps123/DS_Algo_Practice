function minEatingSpeed(piles,h){ //BSearch coz we convert array frok 1...maxVal of pile
    let l=1,r=Math.max(...piles);
    let res=r,k;

    while(l<=r){

        k=Math.floor((l+r)/2);
        let totalTime=0;
        for(let p of piles){
            totalTime+=Math.ceil(p /k);
        }
        if(totalTime<=h) {

            res=k;
            r=k-1;
        }    
        else  l=k+1;

    }
    return res;  
}


console.log(minEatingSpeed([3,6,7,11],8));
