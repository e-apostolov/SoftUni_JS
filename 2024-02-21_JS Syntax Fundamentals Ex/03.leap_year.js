function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
        return console.log('yes');
    } 
    console.log('no');
}


isLeapYear(1984)
isLeapYear(2003)
isLeapYear(4)
