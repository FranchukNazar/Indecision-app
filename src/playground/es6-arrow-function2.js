// arguments

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));
// this keyword

const user = {
    name: 'Nazar',
    cities: ['Vinnytsia', 'Lviv','Sokal'],
    printPlscesLived(){    
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlscesLived());


const multiplier = {
    numbers: [1, 3, 5, 7, 8, 0, 3, 2],
    multiplyBy: 56,
    multiply(){
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());