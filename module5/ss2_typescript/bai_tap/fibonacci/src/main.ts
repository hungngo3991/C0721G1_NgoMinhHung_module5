function calculateSumFibo(n: number) {
    let fibo = [];
    if (n <= 0)
        return 0;

    fibo[0] = 0;
    fibo[1] = 1;

    let sum = fibo[0] + fibo[1];

    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        sum += fibo[i];
    }
    return sum;
}

let n = 6;
console.log("Tổng của dãy số fibonacci với " + n + " phần tử là: " + calculateSumFibo(n));




