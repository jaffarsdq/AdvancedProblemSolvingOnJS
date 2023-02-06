let arr = [1,2,2,3,3,3,5,8,8],x = 3;

function upperbound (arr,x){
    let ans = arr.length, low = 0 , high = arr.length-1;
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);
        if(arr[mid] <= x){
            low = mid+1;
        }else{ 
            ans = mid;
            high = mid-1;
        }
    }
    return ans;
}
console.log(upperbound (arr,3)); 