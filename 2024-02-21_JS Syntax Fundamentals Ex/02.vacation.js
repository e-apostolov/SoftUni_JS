function solve(count, typeGroup, dayOfWeek) {
    let singlePrice = 0;

    if (dayOfWeek == 'Friday') {
        switch(typeGroup) {
        
            case 'Students':
                singlePrice = 8.45;
                break;
            case 'Business':
                singlePrice = 10.90;
                break;
            case 'Regular':
                singlePrice = 15;
                break;
        }

    } else if (dayOfWeek == 'Saturday') {
        switch(typeGroup) {
        
            case 'Students':
                singlePrice = 9.80;
                break;
            case 'Business':
                singlePrice = 15.60;
                break;
            case 'Regular':
                singlePrice = 20;
                break;
        }

    } else if (dayOfWeek == 'Sunday') {
        switch(typeGroup) {
            
            case 'Students':
                singlePrice = 10.46;
                break;
            case 'Business':
                singlePrice = 16;
                break;
            case 'Regular':
                singlePrice = 22.50
                break;
        }

    }

    let totalPrice = singlePrice * count;

    if (typeGroup == 'Students' && count >= 30) {
        totalPrice *= 0.85;
    } else if (typeGroup == 'Business' && count >= 100) {
        totalPrice -= singlePrice * 10
    } else if (typeGroup == 'Regular' && count >= 10 && count <= 20) {
        totalPrice *= 0.95;
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(40,
    "Regular",
    "Saturday"
    )