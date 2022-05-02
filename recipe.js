/*
Welcome to the programming kitchen.
An analogy between baking cookies and programming.
*/
console.log("Welcome to the programming kitchen!")

// Let's start by declaring our ingredients.
let sugar = 120
let butter = 80
let flour = 200

console.log(sugar)
console.log(butter)
console.log(flour)

// In a medium bowl, mix together butter and sugar
let mediumBowl
console.log(mediumBowl)
mediumBowl = butter + sugar
console.log(mediumBowl)

// Add flour to the mix, in the same bowl
mediumBowl = mediumBowl + flour
// mediumBowl += flour // Another way to write the line above
// Syntactic sugar -- a sweeter way to write the same thing

console.log(mediumBowl)

// We're done, we want to empty the bowl.
mediumBowl = null
console.log(mediumBowl)
