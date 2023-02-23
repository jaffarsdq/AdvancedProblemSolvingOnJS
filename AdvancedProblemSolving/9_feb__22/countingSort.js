let arr = [2,3,1,2,5];

function counting (arr) {
    // Max Element
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max (max, arr[i]);
    }
    // Freq Array
    let freq = Array(max + 1).fill (0);
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]]++;
    }
    // Prefix sum
    for (let i = 1; i < freq.length; i++) {
        freq[i] = freq[i-1] + freq[i];
    }
    //iterate through arr from backwards to keep it stable.
    let op = Array(arr.length);
    for (let i = arr.length-1; i >= 0 ; i--) {
        op[freq[arr[i]] - 1] = arr[i];
        freq[arr[i]]--;
    }
    console.log(op);


}

counting (arr);