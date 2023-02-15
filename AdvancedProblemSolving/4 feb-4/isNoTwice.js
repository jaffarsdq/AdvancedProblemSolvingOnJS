let arr = [0,1,2,3,4,5,6,6];

function twice (arr) {
    let low = 0 , high = arr.length-1;
    while (low <= high) {
        let mid = low + Math.floor ((high - low) / 2);
        if (arr[mid] == mid-1) {
            if (arr[mid] == mid-1) {
                return arr[mid];
            }
            high = mid-1;
        }else {
            low = mid+1;
        }
    }
}

console.log(twice (arr));