var tribonacci = function(n) {
    if( n==0 || n==1 ) return n;
    if( n==2 ) return 1;

    let ans,last = 0,secondlast = 1,thirdlast = 1;
    
    for(let i=3; i<=n; i++){
        ans = last + secondlast + thirdlast;
        last = secondlast;
        secondlast = thirdlast;
        thirdlast = ans;
    }
    return ans;
}

console.log(tribonacci(25));