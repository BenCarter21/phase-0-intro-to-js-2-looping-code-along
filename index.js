// Code your solutions in this file
function writeCards(arrayOfNames, eventName) {
    const messages = []
    for (let i = 0; i < arrayOfNames.length; i++) {
    console.log(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    messages.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages
}

function countDown(number) {
    while(number >= 0){
        console.log(number--)
    }
}