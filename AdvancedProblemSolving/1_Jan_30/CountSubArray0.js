let arr = [1,-1,3,4,5,-9,2,1,-3,6,-6];
console.log(subArray(arr));

function subArray(arr) {
    let prefixSum = Array(arr.length).fill(0);
    prefixSum[0] = arr[0];
    for(let i=1; i<arr.length; i++){
        prefixSum[i] += prefixSum[i-1] +arr[i];
    }
    
    let map = {};
    for(let i=0; i<prefixSum.length; i++){
        let values = prefixSum[i];
        if(map[values]){
            map[values]++;
        }else{
            map[values] = 1;
        }
    }
  
    let ans = 0;
    let keys = Object.keys(map);
    for(let i=0; i<keys.length; i++){
        let curr = keys[i];
        if(map[curr] > 1){
            ans += Math.floor((map[curr]*map[curr]-1)/2);
        }

    }

    if(map[0]){
        ans += map[0];
    }

    return ans;
}

