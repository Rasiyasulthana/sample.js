/*let purchaseamount = 100;
let isPremium= true;
if(purchaseamount >= 1000 && isPremium){
    console.log("You are eligible for a premium discount.");
}
else if(purchaseamount >= 1000 || isPremium){
    console.log("You are eligible for a standard discount.");
}
else{
    console.log("You are not eligible for any discount.");
}

let isWeekend = true;
let isHoliday = false;

console.log(isWeekend || isHoliday);

for loop:
for (let i=1; i<=10; i++){
    console.log("hello");
}

for (let i=1; i<=10; i++){
    console.log(i);
}

let i=1;
while(i<=99){
    console.log(i);
    i++;
}

let i=1;
do{
    console.log(i);
    i--;
}
while(i>=-10);

let signal= "green";
switch(signal){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");
}

let grade="A";
switch(grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("good")
        break;
}
        FUNCTION:

function add(a,b){
    console.log(a+b);
}
add(20,30);
add(50,70);

function multiply(price, quantity){
    console.log(price * quantity);
}
total=multiply(100, 5);
total=multiply(200, 3);
console.log("Total: " + total);

_______________Arrow Function____________________

let greet = () => {
    console.log("Hello, welcome to JavaScript!");
}
greet();

HOF 

function processOrder(callback){
    console.log("processing order...");

    callback();

}
function sendMessage(){
    console.log("Order processed successfully!");

}
processOrder(sendMessage);

let totalAmount = 1500;

function addAmount(amount){
    totalAmount += amount;

    return totalAmount;
}
console.log(addAmount(500));
console.log(addAmount(500));
console.log(addAmount(500));

let result = (function(a, b) {
    return a + b;
})(10, 20);

if (true) {
    let age = 25;

    console.log(age);
}


let x = 50;

function show() {
    let y = 20;
    if (true) {
        let z = 10;
        console.log(x + y + z);
        console.log(z);
    }
    
}

show(); 
function orderFood() {
    console.log("Food is being prepared...");
}

function foodReady() {
    console.log("Your food is ready!");
}

orderFood();

setTimeout(foodReady, 3000);

class employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log("Employee:" +this.name );
        console.log("Salary:" + this.salary);
    }
}
let emp1 = new employee("John", 50000);
emp1.displayDetails();
let fruits1 = ["Apple", "Mango"];
let fruits2 = ["Oranges", "Banana"];

let allFruits = [...fruits1, ...fruits2];

console.log(allFruits);
*/
function printTopThree(first, second, third) {
  console.log("1:", first);
  console.log("2:", second);
  console.log("3:", third);
}

const topPlayers = ["Rohan", "Ananya", "Dev"];
printTopThree(...topPlayers);