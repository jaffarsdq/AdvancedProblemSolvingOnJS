// let c = [5,10,30,20,15]; //unit of board
// let a = 3;//no.of painters need to be painted
// let b = 1;//unit of time taken per board 
// let c = [1, 10];
// let a = 2;
// let b = 5;
a = 10
b = 1
c = [1, 8, 11, 3]
//let's make a function canPaint

function canPaint (c, a, b, mid, n) {
    let painters = 1; // atleast need 1 painter to paint the board.
    let unitsPainted = 0; //non of the units painted 
    let i = 0; //for iterate
    while (i < n) {
        if (unitsPainted + c[i]*b > mid) {
            painters++;
            if(painters > a) return false;
            unitsPainted = 0; 
        } else {
            unitsPainted += c[i]*b;
            i++;
        }
    }
    if(painters <= a) return true;
}

//Let's make binary search on search space.

function search (c, a, b) {
    let n = c.length;
    let summation = 0;
    let maxEl = -1;
    for (let i = 0; i < n; i++) {
        summation += c[i];
        maxEl = Math.max (maxEl, c[i]);
    }
    let lo = maxEl*b, hi = summation*b;
    let ans = 0;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo ) / 2);
        if(canPaint (c, a, b, mid, n)) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return ans % 10000003;
}

console.log (search (c, a, b));