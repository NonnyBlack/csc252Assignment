// DECLARING AND INITIALIZING AN ARRAY OF FRUITS
let fruits = [];
let newFruits = ["apple", "banana", "cherry", "mango", "orange", "pepper"];
console.log(newFruits); 


// DECLARING AND INITIALIZING A TWO DIMENSIONAL ARRAY OF NAMES
let nameCategories = [
    ["Rawfile", "Comrade", "Coinmatic"], // Category 1: Nicknames
    ["Kingsley", "Fransisca", "Daniel"], // Category 2: First Names
    ["Chidiebere", "Mmesoma", "Ifechukwu"], // Category 3: Last Names
];
console.log(nameCategories); 


//TRANSVERSING THROUGH THE FRUIT ARRAY USING FOR LOOP
for (let fruits = 0; fruits < newFruits.length; fruits++) {
    console.log(newFruits[fruits]);
}

//TRANSVERSING THROUGH THE NAME CATEGORY ARRAY USING FOR LOOP
for (let i = 0; i < nameCategories.length; i++) {
    console.log(nameCategories[i]);
}


// CONCATENATING A STRING OF ARRAY USING THE JOIN METHOD
let studentNames = ["Kingsley", "Fransisca"];
let newNames = studentNames.join(", ");
console.log(newNames); 