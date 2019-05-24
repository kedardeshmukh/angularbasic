var message:string = "Hello Word";
console.log(message);

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

console.log(greeter(user));

// Exp. of anonymous function

var add = function(a:number,b:number){
return a+b;
}
console.log("Addition of 3 and 2 is " + add(3,2));


// Recursion function

function factorial(number) {
    if (number <= 0) {         // termination case
       return 1; 
    } else {     
       return (number * factorial(number - 1));     // function invokes itself
    } 
 }; 
 console.log(factorial(6));  