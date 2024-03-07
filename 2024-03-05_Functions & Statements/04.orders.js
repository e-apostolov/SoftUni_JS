function solve(product, quantity) {
    function getProductPrice(product) {
        switch(product) {
            case 'coffee':
                return 1.50;
            case 'water':
                return 1.00;
            case 'coke':
                return 1.40;
            case 'snacks':
                return 2.00
        }
    }
    console.log((getProductPrice(product) * quantity).toFixed(2))
}

solve("water", 5)
