// Write your code in this file!
//Current User variable
let currentUser = "Dennis Kimathi";

let welcomeMessage = "Welcome to Flatbook, ";

currentUser = welcomeMessage;

console.log(currentUser)

welcomeMessage =  `${currentUser}!`

//Excited Welcome Message Variable

let excitedWelcomeMessage = 'WELCOME TO FLATBOOK, ';

let upperCaseCurrentUser = currentUser.toUpperCase();

excitedWelcomeMessage = `${upperCaseCurrentUser}!`

//Short Greeting variable
let shortGreeting = 'Welcome, ';

const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);

console.log(firstInitial);
console.log(restOfName)


shortGreeting = `${shortGreeting}!`