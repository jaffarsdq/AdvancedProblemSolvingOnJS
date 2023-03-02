process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function readNumber() {
    return Number(readLine());
}

function readPairOfNumbers() {
    let input = readLine();
    input = input.split(" ").map(value => Number(value));
    return input;
}

function readNumberArrayByLine(n) {
    let result = [];
    for(let i = 0; i < n; i++) {
        result.push(Number(readLine()));
    }
    return result;
}

function canPlaceCow (stalls, n, c, mid) {
    let count = 1;
    let last_pos = stalls [0];
    for (let i=1; i<=n ; i++) {
        if (stalls [i] - last_pos >= mid) {
            count ++;
            last_pos = stalls[i];
        }
        if (count >= c) return true; 
    }
    return false;
}

function main() {
	let t = readNumber();
	let [n, c] = readPairOfNumbers();
	n = Number(n);
	c = Number(c);
	let stalls = readNumberArrayByLine(n);
	for (let i = 1; i <=t; i++) {
    let stall = stalls.sort((a, b) => a - b);
    let max = stall[n-1] , min = stall[0];
    let ans = 1;
    let low = min, hi = max-min;
    while ( low <= hi) {
        let mid = low + Math.floor ((hi - low) / 2);
        if (canPlaceCow (stall, n, c, mid)){
            ans = mid; 
            low = mid + 1;
        } else {
            hi = mid - 1; 
        }
    }
    console.log (ans);
	}
}
