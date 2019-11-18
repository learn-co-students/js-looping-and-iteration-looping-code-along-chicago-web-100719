// Code your solutions in this file
function writeCards(nameArray, eventName) {
    let newArray = [];
    for (let i = 0; i < nameArray.length; i++) {
        newArray[i] = `Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`;
    }
    return newArray;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number --;
    }
}