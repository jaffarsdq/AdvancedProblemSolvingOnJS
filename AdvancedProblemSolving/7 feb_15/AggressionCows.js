function canPlaceCow (stalls, n, c, mid) {
    count = 1;
    last_pos = stalls [0];
    for (let i=1; i<n ; i++) {
        if (stalls [i] - last_pos >= mid) {
            count ++;
            last_pos = stalls[i];
        }
        if (count >= c) return true; 
    }
    return false;
}

let low = 1, hi = max-min