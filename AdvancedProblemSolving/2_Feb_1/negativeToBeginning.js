// Let the array be [1, 2, -3, 4, -4, -5]. On rearranging the array such that all negative numbers appear before all positive numbers we get the resulting array [-3, -5, -4, 2, 4, 1].

let arr = [2,3,0,1,-2,3,-4,4];
console.log(negativeToBeginning(arr));

function negativeToBeginning(arr) {
    let i = 0;
    let j = arr.length-1;

    while(i<=j){
        if(arr[i] >= 0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j--;
        }else{
            i++;
        }
    }
    return arr;
}