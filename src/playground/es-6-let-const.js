var nameVar = 'andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'naz';
nameLet = 'oops'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);


function getPetName(){
    const petName = 'Hal';
    return petName;
}
const petName = getPetName();
console.log(petName);

// block scoping
var fullName = 'Andrew Mead';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0]; 
    console.log(firstName);
}
console.log(firstName);