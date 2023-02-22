function f (arr, i) {
    if (i == arr.length) return [];
    let temp = f(arr,i+1);
    let result = [];
    if (temp.length == 0) {
        result.push([arr[i]].concat(temp));
        result.push(temp);

    }else {
        for (let j = 0; j < temp.length; j++) {
            result.push([arr[i]].concat(temp[j]));
            result.push(temp[j]);
        }
    }
    return result;
}
console.log(f ([1,2], 0));