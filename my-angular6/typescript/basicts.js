var message = "Hello Word";
console.log(message);
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.log(greeter(user));
// Exp. of anonymous function
var add = function (a, b) {
    return a + b;
};
console.log("Addition of 3 and 2 is " + add(3, 2));
// Recursion function
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // function invokes itself
    }
}
;
console.log(factorial(6));
