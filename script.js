var name = prompt("Enter your name").trim();
var age = +prompt("Enter your age").trim();
var gender = prompt("Enter your gender (male, female)");
if (gender == "man" && age >= 18 && age <= 28) {
    var question = prompt("Have you ever been to the army?(yes,no)");
} else {
    console.log("Thank you!");
}

if (age >= 18 && age <= 28 && gender == "man" && question == "no") {
    console.log("You should go to army!");
} else {
    console.log("You don't have to go!");
    
}