function sumTable() {
    const tdCostElements = document.querySelectorAll('tr td:last-of-type:not(#sum)');
    const tdTotalSum = document.getElementById('sum');

    let sum = 0;
    for (let el of tdCostElements) {
        sum += Number(el.textContent);
    }

    tdTotalSum.textContent = sum;
}