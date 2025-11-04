// Contact Manager Application
// Problem Statement
// Objective
// Create a "Contact Manager" application using JavaScript to explore the fundamentals of
// functions. This project will involve declaring and invoking functions to add, delete, and display
// contacts. You will understand the difference between arguments and parameters by creating
// functions with single, multiple, and arbitrary numbers of parameters. You will also practice
// returning values from functions and learn about scope by managing global and local variables.
// Additionally, you will compare function declarations with function expressions and get introduced
// to arrow functions to see their syntax and how they differ from traditional functions.
// Instructions
// 1. Global Array:
// ○ Initialize a global array named contacts to store contact objects.
// 2. Function to Add a Contact:
// ○ Create a function addContact that takes name and phone as parameters.
// ○ Add a new contact object to the contacts array.
// ○ Print a message indicating the contact has been added.
// 3. Function to Delete a Contact:
// ○ Create a function deleteContact that takes name as a parameter.
// ○ Remove the contact with the specified name from the contacts array.
// ○ Print a message indicating whether the contact was found and deleted.
// 4. Function to Display All Contacts:
// ○ Create a function displayContacts that prints all contacts in the contacts
// array.

// 5. Function with Arbitrary Number of Parameters:
// ○ Create a function addMultipleContacts that takes an arbitrary number of
// contact objects as arguments.
// ○ Add each contact object to the contacts array.
// 6. Function that Returns a Value:
// ○ Create a function findContact that takes name as a parameter and returns the
// contact object if found, otherwise returns null.

// 7. Function Expression:
// ○ Create a function expression updateContact that takes name and newPhone
// as parameters.
// ○ Update the phone number of the contact with the specified name.
// ○ Print a message indicating whether the contact was found and updated.
// 8. Arrow Function:

// ○ Create an arrow function countContacts that returns the total number of
// contacts in the contacts array.

// Solution Code
// Global array to store contacts
let contacts = [];
// Function to add a contact
function addContact(name, phone) {
contacts[contacts.length] = { name: name, phone: phone };
console.log(`Added contact: ${name}`);
}
// Function to delete a contact
function deleteContact(name) {
let newContacts = [];
let deleted = false;
for (let i = 0; i < contacts.length; i++) {
if (contacts[i].name !== name) {
newContacts[newContacts.length] = contacts[i];
} else {
deleted = true;
}
}
contacts = newContacts;
if (deleted) {
console.log(`Deleted contact: ${name}`);
} else {
console.log(`Contact not found: ${name}`);
}
}
// Function to display all contacts
function displayContacts() {
console.log("Contacts:");
for (let i = 0; i < contacts.length; i++) {
console.log(`${i + 1}. ${contacts[i].name}:

${contacts[i].phone}`);

}
}
// Function with arbitrary number of parameters
function addMultipleContacts() {
for (let i = 0; i < arguments.length; i++) {
addContact(arguments[i].name, arguments[i].phone);
}
}
// Function that returns a value
function findContact(name) {
for (let i = 0; i < contacts.length; i++) {
if (contacts[i].name === name) {
return contacts[i];
}
}
return null;
}
// Function expression
const updateContact = function(name, newPhone) {
let updated = false;
for (let i = 0; i < contacts.length; i++) {
if (contacts[i].name === name) {
contacts[i].phone = newPhone;
updated = true;
break;
}
}
if (updated) {
console.log(`Updated ${name}'s phone to ${newPhone}`);
} else {
console.log(`Contact not found: ${name}`);
}
};
// Arrow function

const countContacts = () => {
let count = 0;
for (let i = 0; i < contacts.length; i++) {
count++;
}
return count;
};
// Example usage
addContact("Alice", "123-456-7890");
addContact("Bob", "987-654-3210");
displayContacts();
deleteContact("Alice");
displayContacts();
addMultipleContacts(
{ name: "Charlie", phone: "111-222-3333" },
{ name: "David", phone: "444-555-6666" }
);
displayContacts();
let foundContact = findContact("Bob");
console.log("Found contact:", foundContact);
updateContact("Charlie", "999-888-7777");
displayContacts();
console.log("Total contacts:", countContacts());

// Detailed Steps
// 1. Global Array:
// ○ Initialize an empty array contacts to store contact objects.
// 2. Function to Add a Contact:
// ○ Define a function addContact(name, phone) that takes name and phone as
// parameters.

// ○ Add a new contact object to the contacts array using
// contacts[contacts.length].
// ○ Print a message indicating the contact has been added.
// 3. Function to Delete a Contact:
// ○ Define a function deleteContact(name) that takes name as a parameter.
// ○ Initialize a new array newContacts and a boolean variable deleted set to
// false.
// ○ Use a for loop to iterate through the contacts array.
// ○ If the current contact's name does not match the specified name, add it to
// newContacts.
// ○ If a match is found, set deleted to true.
// ○ After the loop, update contacts to newContacts.
// ○ Print a message indicating whether the contact was found and deleted.
// 4. Function to Display All Contacts:
// ○ Define a function displayContacts() that prints all contacts in the contacts
// array.
// ○ Use a for loop to iterate through the contacts array and print each contact's
// details.

// 5. Function with Arbitrary Number of Parameters:
// ○ Define a function addMultipleContacts() that takes an arbitrary number of
// contact objects as arguments.
// ○ Use a for loop to iterate through arguments.
// ○ For each argument, call addContact() with the contact's name and phone.
// 6. Function that Returns a Value:
// ○ Define a function findContact(name) that takes name as a parameter.
// ○ Use a for loop to iterate through the contacts array.
// ○ If a contact with the specified name is found, return the contact object.
// ○ If no match is found, return null.
// 7. Function Expression:
// ○ Define a function expression updateContact(name, newPhone) that takes
// name and newPhone as parameters.
// ○ Use a for loop to iterate through the contacts array.
// ○ If a contact with the specified name is found, update its phone number and set
// updated to true.
// ○ Print a message indicating whether the contact was found and updated.
// 8. Arrow Function:
// ○ Define an arrow function countContacts() that returns the total number of
// contacts in the contacts array.
// ○ Initialize a variable count to 0.
// ○ Use a for loop to iterate through the contacts array and increment count.

// ○ Return count./

// Bahut achcha sawaal! Aap jaanna chahte hain ki har ek function aur code block **kaha (position)** likha gaya hai, **kyun (reason/purpose)** likha gaya hai, aur **uss jagah par uska use case kya hai**.

// Main aapke diye gaye Contact Manager code ko isi tareeke se explain karta hoon.

// ---

// ## 💻 Contact Manager: Code Position Aur Usecase Explanation

// | Code Block | Position | Kyun Likha Gaya? (Purpose) | Uss Jagah Usecase Kya Hai? |
// | :--- | :--- | :--- | :--- |
// | `let contacts = [];` | **Topmost Line** (Code file ki shuruwat mein) | Isko **Global Variable** banane ke liye. Global variable har function mein access ho sakta hai. | Yeh **main data store** hai. Saare functions (add, delete, display) isi array ko use karte hain. |
// | --- | --- | --- | --- |
// | `function addContact(name, phone) { ... }` | `contacts` array ke theek neeche | Ek basic functionality define karne ke liye: **naye contacts ko data store mein jodna**. | Iski position as a **Function Declaration** matter nahi karti (hoisting ki wajah se), lekin code ko saaf rakhne ke liye ise pehle define karte hain. |
// | --- | --- | --- | --- |
// | `function deleteContact(name) { ... }` | `addContact` ke neeche | Contacts list se kisi contact ko **naam se hataane** ki functionality provide karne ke liye. | **Data Manipulation** ka use case: Array ko modify karke, bina delete kiye elements ko chhodkar naya array banana. |
// | --- | --- | --- | --- |
// | `contacts = newContacts;` | `deleteContact` function ke **andar** | Deletion process complete hone par **Global** `contacts` array ko **Local** `newContacts` array se **update** karne ke liye. | Yeh **Global Scope** variable (`contacts`) ko **Local Scope** ke logic se badalta hai. |
// | --- | --- | --- | --- |
// | `function displayContacts() { ... }` | `deleteContact` ke neeche | `contacts` array mein maujood **saare data ko user ko dikhaane** ke liye. | Yeh **Output/Presentation** ka use case hai, jahan data ko user-friendly format mein console par print kiya jaata hai. |
// | --- | --- | --- | --- |
// | `function addMultipleContacts() { ... }` | `displayContacts` ke neeche | Ek baar mein **kitne bhi (arbitrary) contact objects** ko add karne ki flexibility dene ke liye. | Is position par yeh **arbitrary number of arguments** ka concept dikhata hai, jahan `arguments` object ka use hota hai. |
// | --- | --- | --- | --- |
// | `function findContact(name) { ... return contact; }` | `addMultipleContacts` ke neeche | Contacts list mein kisi contact ko **search karke uska data wapas (return) laane** ke liye. | Yeh **Value Return** karne ka use case hai. Iska output ek variable mein store kiya ja sakta hai aur aage use kiya ja sakta hai (jaisa ki `example usage` mein `foundContact` mein kiya gaya hai). |
// | --- | --- | --- | --- |
// | `const updateContact = function(name, newPhone) { ... };` | `findContact` ke neeche | Existing contact ke phone number ko **badalne** ki functionality. | Yeh **Function Expression** ka use case hai. Isse dikhaya jaata hai ki function ko ek variable mein assign karna (Function Declaration se alag) bhi ek tareeka hai. |
// | --- | --- | --- | --- |
// | `const countContacts = () => { ... };` | `updateContact` ke neeche | List mein **total kitne contacts** hain, yeh ginne ke liye. | Yeh **Arrow Function** ka use case hai. Yeh Function Expression ka modern, concise syntax dikhata hai. |
// | --- | --- | --- | --- |
// | `// Example usage ...` | Saare function definitions ke **neeche** | Saare functions ko **chala kar (invoke)** unki functionality ko test aur demonstrate karne ke liye. | Yeh **Code Execution** ka use case hai. Saara logic (functions) define hone ke baad, unhe isi jagah se call karke result dekha jaata hai. |