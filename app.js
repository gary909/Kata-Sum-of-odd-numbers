function rowSumOddNumbers(n) {
    // let startingNum = (n * n) - (n - 1); // left hand side number
    // let ans = 0;
    // if (n > 1) {

    //     for (let i = 0; i < n; i++) {
    //         ans = ans + 1;
    //     }
    // }

    // return ans;
    return n * n * n;
}

console.log(rowSumOddNumbers(1)); // 1
console.log(rowSumOddNumbers(4)); // 64
console.log(rowSumOddNumbers(5)); // 125
console.log(rowSumOddNumbers(42)); // 74088