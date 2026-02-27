function findMedianSortedArrays(nums1,nums2){

    let smaller=nums1>nums2?nums2:nums1;
    let larger=nums2>nums1?nums2:nums1;
    let total=smaller.length + larger.length;
    let half=Math.floor((total+1)/2);

    let l=0,r=smaller.length;

    while(l<=r){
        let partitionX=Math.floor((l+r)/2);
        let partitionY=half-partitionX;

        let l1=partitionX===0?Number.MIN_SAFE_INTEGER:smaller[partitionX-1];
        let r1=partitionX===smaller.length?Number.MAX_SAFE_INTEGER:smaller[partitionX];

        let l2=partitionY===0?Number.MIN_SAFE_INTEGER:larger[partitionY-1];
        let r2=partitionY===larger.length?Number.MAX_SAFE_INTEGER:larger[partitionY];

        if(l1<=r2 && l2<=r1){
            if((total%2)===0){
                return (Math.max(l1,l2)+Math.min(r1,r2))/2;
            }else{
                return Math.max(l1,l2)
            }
        }
        if(l1>r2){
                r=partitionX-1;
        }else{
            l=partitionX+1;
        }

    }

    return 0;
}