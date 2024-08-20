window.onload = function() {
    document.querySelector("h1").textContent = "Latihan JavaScript Selesai";
};
let name =  'John'
const age = 30
document.getElementById('Output').innerHTML = `<p>Nama: ${name}</p><p>Umur: ${age}</p>`
let fruits = ["Apple","Banana","Manggo"];
for(let i = 0; i < fruits.length; i++) {
    document.getElementById('Output').innerHTML += `Fruit ${i+1}: ${fruits[i]}<br>`;
}
let person = {firstName: "John", lastName: "Doe", age: 30};
document.getElementById('Output').innerHTML += `Full name: ${person.firstName} ${person.lastName}<br><br>`;

function checkValue() {
    let value = parseInt(document.getElementById('userInput').value);
    let output = document.getElementById('Output');
    output.innerHTML = '';

    if (value > 10) {
        output.innerHTML += "Nilai lebih besar dari 10.<br>";
    } else if (value === 10) {
        output.innerHTML += "Nilai sama dengan 10.<br>";
    } else {
        output.innerHTML += "Nilai kurang dari 10.<br>";
    }

    for (let i = 1; i <= value; i++) {
        output.innerHTML += i + "<br>";
    }
}
function greet(name) {
    return "Hello, " + name;
}
document.getElementById("Output").innerHTML += greet("Alice") + "<br>";
document.getElementById("Output").innerHTML += greet("Bob") + "<br>";
document.getElementById("Output").innerHTML += greet("Charlie") + "<br><br>";
function calculateSquare(number){
    return number * number
}
document.getElementById("Output").innerHTML += "Square of 2 = " + calculateSquare(2) + "<br>";
document.getElementById("Output").innerHTML += "Square of 3 = " + calculateSquare(3) + "<br>";
document.getElementById("Output").innerHTML += "Square of 4 = " + calculateSquare(4) + "<br><br>";
const sum = (a, b) => a + b;
document.getElementById("Output").innerHTML += "Sum of 5 and 3 = " + sum(5, 3) + "<br>";
document.getElementById("Output").innerHTML += "Sum of 7 and 8 = " + sum(7, 8) + "<br>";
document.getElementById("Output").innerHTML += "Sum of 10 and 15 = " + sum(10, 15) + "<br><br>";
let students = ["Alice", "Bob", "Charlie"];
students.push("Andy");
students.forEach(function(student) {
    document.getElementById("Output").innerHTML += student + "<br><br>";
});
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};
for (let key in car) {
    document.getElementById("Output").innerHTML += key + ": " + car[key] + "<br><br>";
}
let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2018},
    {brand: "Ford", model: "Focus", year: 2019}
];
cars.forEach(function(car) {
    document.getElementById("Output").innerHTML += car.brand + " " + car.model + "<br>";
});