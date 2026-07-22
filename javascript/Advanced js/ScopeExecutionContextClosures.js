
// function abcd(){
//     var a= 12;
// }
// console.log(a);



//1. manly three type of scope - function scope ,global scope and ,block scope .//

// function scope - fuction key andar hi use hosakta haa,
// function abcd(){
//     var a= 12;
// }

//global scope - poore code mey use hoosakti ha .
// var a= 12;

// block scope- { } curly braces mein  bhi use hoo sakti hai.
// {

// }




// execution content 

// js sabsa pehele jaise hi aapka fuction dekhta hai sabsae pehele js banna hai execution context , ye ek process hai jo ki do diffrent phase mey  chalta haaa,  memory phase and doorsey ka naam hai execution phase./

// abstract haa --- joo dhiktaa nahi haaa nahi haa . 

// function abcd (){
//     var a = 12 ;
//     let = 13;
//     let = 14;
//   //..

//   //

// }




// js - laxical scoping -> ki app kaha  par physically availavel ho ye poori tarakee se depend karta hai  ke app kya access kro paaoge

// function abcd (){
//     let a =12;
//     function defg(){
//         console.log(a);
//     }
//  }


//dynamic scoping  ->  kaha sey call kr he ho uspey  depend  karega ki keya value melegi -- they don't exicet in js .



// closures hota ha fuctions joo ki kisi parent fnc key andar ho aur andar wala  fuction return ho raha ho , and retyuring fnc  yours kare ,parent  fuction ka koi variable .

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }
// let fnc = abcd();
// fnc();

// faayda  nuksaan par
// private variables
// global pollution 

// ye sach bath haaa fnc ke khatam honey par apka fnc and uska variables  khtm hoo jata hai ., par  jab bhi closhor banta hai to aapka fnc aur uska  variables ka ek backline  banya jaatahai aur uska naam hota haio [[enviroment]]




// // private counter

// function countForMe(){
//   let c = 0;
//   return function(){
//    c++;
//    console.log(c);

//   };
// }
// let fnc = countForMe();
// fnc();
// fnc();
// fnc();

// let fnc2 = countForMe();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();


// encapsulation//


function clickLimiter() { // fuction clicklmiter {} -- private variable ess ka value bhar sey change nahi karsakta haa , matlab hide haa puri ditales 
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`clicked: ${click} times`);
} else {
      console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME");
    }
  };
}
click = 0;
let fnc = clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc();








