let x = 52871;
// new
var reverse = function(x) {
    let z = Math.abs(x);
    let str = "";
    while(z > 0){
        let n = z % 10;
        str += n;
        z = Math.floor(z / 10);
    }
    if(x < 0){
            str *= -1;
    }
    return str > 2**31 ? 0 : str < -(2**31) ? 0 : str;
};

console.log(reverse(x));
