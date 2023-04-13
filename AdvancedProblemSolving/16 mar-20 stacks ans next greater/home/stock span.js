function calculateSpan(prices) {
    const n = prices.length;
    const stack = [];
    const spans = new Array(n).fill(1);
  
    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
        const j = stack.pop();
        spans[i] += spans[j];
      }
      stack.push(i);
    }
  
    return spans;
  }

  const prices = [100, 80, 60, 70, 60, 75, 85];
console.log(calculateSpan(prices)); // [1, 1, 1, 2, 1, 4, 6]

/**   DRY RUN OF CODE ------>
 * Sure, let's dry run the code with the following input:

javascript
Copy code
const prices = [100, 80, 60, 70, 60, 75, 85];
console.log(calculateSpan(prices)); // [1, 1, 1, 2, 1, 4, 6]
Initialize n to the length of the prices array, which is 7.
Initialize an empty stack array and an array spans of length 7, with all elements initialized to 1.
For i = 0, push i onto the stack.
For i = 1, since prices[1] is less than prices[0], push i onto the stack.
For i = 2, since prices[2] is less than prices[1], push i onto the stack.
For i = 3, pop 2 and 1 from the stack, and add their spans (spans[2] and spans[1]) to spans[3], which becomes 2.
Now, the stack contains [0, 3].
For i = 4, since prices[4] is less than prices[3], push i onto the stack.
For i = 5, pop 4, 3, and 2 from the stack, and add their spans to spans[5], which becomes 4.
Now, the stack contains [0, 5].
For i = 6, pop 5, 0, and add their spans to spans[6], which becomes 6.
Now, the stack contains [6].
Return the spans array [1, 1, 1, 2, 1, 4, 6].
Therefore, the output is [1, 1, 1, 2, 1, 4, 6], which is the correct span for each day's stock price.
 */