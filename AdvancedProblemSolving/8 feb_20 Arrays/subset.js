function subset (arr) {
    let l = arr.length;
    let n = (1 << l) - 1;
    for (let i = 0; i <= n; i++) {
        var result = [];
        let temp = i;
        let j = arr.length-1;
        while (j>=0 && temp > 0) {
            let isEven = temp % 2 ==0 ;
            if (!isEven) {
                result.push(arr[j]);
            }
            j--;
            temp = temp >> 1;
        }
        console.log(result);
    }
}

let arr = [1,2,3];
subset(arr);
// console.log(result);