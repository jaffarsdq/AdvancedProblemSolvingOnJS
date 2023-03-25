function printAllSubarrays(arr) {
    const n = arr.length;
    let result = [];
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        result.push(arr.slice(i, j+1));
      }
    }
    result.push([]);
    return result;
  }

let arr = [1,2,3,4];

console.log(printAllSubarrays(arr));