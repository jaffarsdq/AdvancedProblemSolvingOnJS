function canPlaceCow (stalls, n, c, mid) {
    let count = 1;
    let last_pos = stalls [0];
    for (let i=1; i<=n ; i++) {
        if (stalls [i] - last_pos >= mid) {
            count ++;
            last_pos = stalls[i];
        }
        if (count >= c) return true; 
    }
    return false;
}
function search (stalls) {
    let stall = stalls.sort((a, b) => a - b);
    let max = stall[n] , min = stall[0];
    let ans = 1;
    let low = min, hi = max-min;
    while ( low <= hi) {
        let mid = low + Math.floor ((hi - low) / 2);
        if (canPlaceCow (stall, n, c, mid)){
            ans = mid; 
            low = mid + 1;
        } else {
            hi = mid - 1; 
        }
    }
    return ans;
}
let stalls = [1,2,8,4,9] , n = stalls.length-1;
let c = 3;
console.log (search (stalls));