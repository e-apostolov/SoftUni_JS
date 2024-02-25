function solve(m, n) {
    let result = '';
    let totalResult = 0
    for (let i = m; i <= n; i++) {
        result += i + ' ';
        totalResult += i
    }

    console.log(result.trim())
    console.log(`Sum: ${totalResult}`)
}