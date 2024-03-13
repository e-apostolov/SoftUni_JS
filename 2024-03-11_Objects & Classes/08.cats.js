function solve(input) {

    class Cat{
        constructor(catName, catAge) {
            this.catName = catName;
            this.catAge = catAge;
        }
    
        meow () {
            console.log(`${this.catName}, age ${this.catAge} says Meow`)
        }
    }

    // Option 1
    // for (pair of input) {
    //     let [name, age] = pair.split(' ')
    //     let cat = new Cat(name, age);
    //     cat.meow()
    // }
    

    // Option 2

    const result = input
        .map(line => line.split(' '))
        .map(([name, age]) => new Cat(name, Number(age)))
        .forEach(cat => cat.meow())
}

solve(['Mellow 2', 'Tom 5'])