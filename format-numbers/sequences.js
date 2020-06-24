// data to be fed into reducing function
let source = [3, 4, 5, 9, 10, 11, 12, 13];
let source2 = [6, 8, 9, 10, 12, 14];

// test the reducing function
let result = source.reduce((acc, cur, idx, arr) => {
    return format(acc, cur, idx, arr);
}, []);

let result2 = source2.reduce((acc, cur, idx, arr) => {
    return format(acc, cur, idx, arr);
}, []);

// output and manually confirm the results
console.log(result);
console.log(result2);

// reducing function to return an array of formatted strings representing the data passed in
// if numbers in the array are consecutive, then format the sequence using "-"
function format(acc, cur, idx, arr) {
    let prev = (idx) ? arr[idx - 1] : undefined;
    let diff = (prev) ? cur - prev : 0;
    if (idx && diff === 1) {
        // get the saved value from the accumulator
        let savedValue = acc.pop();
        // determine the starting value in the sequence
        let startValue = (String(savedValue).includes("-")) ? 
            String(savedValue).split("-")[0] : savedValue;
        // construct the sequence
        let sequence = startValue + "-" + cur;
        // save the sequence for the next iteration
        acc.push(sequence);
    } else {
        // this is for the first entry in the array so just store it
        acc.push(cur);
    }
    
    return acc;
}