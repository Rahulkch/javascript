// .......... shadowing schopinh 
//           note 
/*
illegal shadowing  .......---if we shadow let to var hen it going to give error 
*/

// function test(){
//     let b="hello";
//     let a="hello";
//     if(true){
//         var a="hey";
//         console.log(a)
//     }
//     console.log(a)
// }

// test()

//  declaration 


//  .......................it is fine we can declare within a same scope 
// var a;
// var a; 


// error
// let a;
//     let a; 


//  errooor 
// const  a;
// const  a; 


// const a=10  ...........we need to declare value while declaring only 
// const const canot be importan 

// .....................hoisting ............

// console.log(count);
// var count=1;
//...........(this is caleed as hosting )............. here we should havee get error but console.log(count);




// for let variable ....
//
// console.log(count);
let count=1;
// this will give error ther are also hoisted but the are hoisted in tempral deadjone.


// ........................question on hoisting

function ques(){
    console.log(a)
// ans is undefined it has initalize the function but not initalize the variable 

    var a=10;
}
function ques2(){
    console.log(a)
    console.log(b)
    console.log(c)
  

    //  ans ....error (let varriable are also hoiseted but they are not hoisted in tempralal dead zone)
    var a=10;
    let b=8;
    let c=5;
}
// ques();

ques2();

// temprala deadzone are state where variable are in scope but not yet declare 
