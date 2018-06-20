/*
let firstName = 'Gethin';
let lastName = 'Rawlings';

console.log(lastName + ' ' + firstName)

console.log(`${lastName} ${firstName}`)
*/
const myObject = {
    firstName : 'Gethin',
    lastName : 'Rawlings' ,
    middleName : 'Paul'
}

let {firstName , lastName } = myObject;

function addressMaker (address) {
    const {city , state} = address;
    const newAddress = {
        city,
        state,
        country: 'UK'
    };
    return (`
            ${firstName},
            ${lastName},

            ${city}, 
            ${state},
            ${newAddress.country}`
        );
}

const myAddress = addressMaker({city: 'Southend on sea', state: 'Essex'})

console.log(myAddress);