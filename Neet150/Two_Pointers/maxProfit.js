function maxProfit(prices){
    let l=0,r=1;
    let profit,maxProfit=0;
  
    while(r<prices.length){
      //price[r]--sell.price[l]--buy
       if (prices[r]>prices[l]){
            profit=prices[r]-prices[l];
            maxProfit=Math.max(profit,maxProfit);
            
        }else{
            l=r;
        }
       r++;

    }
    
    return maxProfit;
    }


//console.log("maxProfit")
console.log(maxProfit([10,1,5,6,7,1]));
console.log(maxProfit([10,8,7,5,2]));