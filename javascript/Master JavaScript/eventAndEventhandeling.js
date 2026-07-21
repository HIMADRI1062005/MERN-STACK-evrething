// browser page par koi bhi harkat karo event  raise ho jaayega
// kuch screen par hoo aur appko reaction reaction dena ho to us waqt aapko event handel karna ana chiaya 
// event matlab hai koi action huya 
// event listener kaa matlab   hai apney koi action reaction deya


//  let h1 = document.querySelector("h1");
//  h1.addEventListener("click",function(){
//     h1.style.color ="red"
//  });


//  let p = document.querySelector("p");
//  p.addEventListener("click",function(){
//    p.style.color="blue";
//  })


//  let p = document.querySelector("p");
//  p.addEventListener("dblclick",function(){
//    p.style.color="pink";
//  })

// let p = document.querySelector("p");
// function dblclick() {
//    p.style.color = "yellow";
// }
// p.addEventListener("dblclick", dblclick);
// p.removeEventListener("dblclick", dblclick);


//  let p = document.querySelector("p");
//  p.addEventListener("click",function(){
//    p.style.color="blue";
//  })


// let input = document.querySelector("input");
// input.addEventListener("input",function(){
//    console.log(typed)
// });


// let inp = document.querySelector("input");
// input.addEventListener("input",function(data){
//    console.log(data);
// });


// let inp = document.querySelector("input");
// inp.addEventListener("input", function (dets) {
//    if (dets.data !== null) {
//       console.log(dets.data);
//    }
// });


//  change event tab chalta hai jab appka koi input select ya text mein koi change hojaayaaee//

let sel =document.querySelector("select");
let device = document.querySelector("#device");
self.addEventListener("change", function (dets){
   device.textContent ="device selected";
});
 
