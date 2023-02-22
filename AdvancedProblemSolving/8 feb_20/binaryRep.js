function f (x, i) {
    x = x >> i;
    return x & 1;
}
 
console.log(f(5, 1));

