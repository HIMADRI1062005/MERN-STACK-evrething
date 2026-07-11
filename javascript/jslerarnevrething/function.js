// what why how
// what fuction 

// ager code likh deya to wo turant cahl jaata hai 


// fuction  statment// 
//  function dance() {
//     console.log("himu");
//     console.log("himu ");
//     console.log("hey");
//     console.log("himu ");
//     console.log("himu ");
//     console.log("himu ");
//  }
//  dance();  // function call karne ke liye

// what do you we not use fuction ,number -123 etc, specal key word ,for ,while this type word we not use this fuction //



// let fnc = function () {
// fnc expression
// }

// fat arrow fnc//

// let fnc = () => {
//     console.log("himu");
//     ("");
// };
//  fnc();// fuction call kar deya



// function dance(v1){
//     console.log(`${v1} himu nach raha haa `);

// }
// dance("himu");
// dance("nach");
// dance("himu nach");


// function add (v1, v2) { // this ARE PERAMETAR   
//     console.log(v1 + v2);
// }
// add(1,2); // this are argument 



// return matlab jaha sey aya ho wahi dal denge 

//  function abcd(v) {
//     return 12 +v;
// }

// let val = abcd(23);
// console.log(val);


// hof  wo fuction hota hai jo ke return kare function ya fir acceeptmkare ek fnc apna peramitter mein/

// function abcd() {
//     return function (){
//         console.log("himu");
//     }
// }
// abcd()(); // function call karne ke liye 2 bar call karna padega


// pure vs inpure fuction//

// aise fnc jo ke bahr ke value answer naa  badley wo haa pure function //

// let a= 122;
// function abcd() {
//     console.log("himu"); // this is pure fuction because it is not changing the value of a variable outside its scope

// }

// function hui(){
//     a++;  // this is impure function because it is changing the value of a variable outside its scope
// }

// inpure fuction joo ke bahr ke value answer badldey wo haa impure function//

// closures fuction example , eaa ek fnc jo return kare ek aur fuction wo haa closure fuction , closure fuction ke ander ek aur fuction return kar deya jaata hai , wo fuction apna parent ke variable ko access kar sakta hai , yehi closure fuction ka main point hai
function abcd() {
    let a =12;
    return function () {
        console.log(a);
    }
}


// laxicale scaping//
