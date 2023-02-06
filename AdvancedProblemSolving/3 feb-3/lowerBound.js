let arr = [1,2,2,3,3,3,5,5],x = 3;

function lowerbound (arr,x){
    let ans = arr.length, low = 0 , high = arr.length-1;
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);
        if(arr[mid] < x){
            low = mid+1;
        }else{
            ans = mid;
            high = mid-1;
        }
    }
    return ans;
}
console.log(lowerbound (arr,9)); 