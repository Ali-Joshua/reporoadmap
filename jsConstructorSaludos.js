function formatName(firstName, lastName){
    return firstName + " " + lastName;
}

function getGreeting(timeOfDay){
    return "Good " + timeOfDay;
}
function createGreeting(firstName, lastName, timeOfDay){
    const greeting = getGreeting(timeOfDay);
    const name = formatName(firstName, lastName);
    return `${greeting}, ${name} `;
}


console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));