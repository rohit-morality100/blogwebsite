// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);




// //  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');


/* Callback Function Example*/
// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }

// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'rohit_pandit', sayName);



// setTimeout(() => { 
//     console.log("This message is shown after 3 seconds");
// },3000);








/*"I Promise a Result!"

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code and consuming code*/

// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   //The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );
//   function myDisplayer(){
//     console.log("hello rohit pandit ");
//   }
const x=document.getElementById('demo');
x.style.color='red';
var cur = "square";

var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];

var color = ["red", "orange", "green", "maroon", "pink", "violet"];


document.getElementById("shape").onclick = function () {
    var rand = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(cur).setAttribute("id", rand);
    cur = rand;
}

document.getElementById("color").onclick = function () {
    var randColor = color[Math.floor(Math.random() * color.length)];
    document.getElementById("block").style.backgroundColor = randColor;
}




