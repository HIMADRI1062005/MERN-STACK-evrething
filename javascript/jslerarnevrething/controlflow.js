// if else else if 
// switch case
// early return pattern 


// if (loggedIn) {
//     // do something
// } else if  {
//     // do something else
// }


// switch (3){
//  case 1:
//     console.log("case 1");
//     break;
//  case 2:
//     console.log("case 2");
//     break;
//  default:
//     console.log("default case");
// }

// function getVal(val) {
//     if (val < 100) return 'A';
//     else if (val < 75) return 'B';
//     else if (val < 50) return 'C';
//     else return 'D';
// }

//  console.log(getVal(89));




// Q.Write a function getGrade (score) that:
//  . Takes a student's marks (0 to 100)
//  . Returns the grade based on this logic:
//90-100 A+
// 80-89 A
// 70-79 B

// 60-69 C
// 33-59 D
//  0-32 Fail
// Anything else      Invalid marks X



//  function getGrade(score) {
//       if (score >= 90 && score <= 100) {
//         return 'A+';
//       }
//       else if (score>= 80 && score <= 89) {
//         return 'A';
//       }
//       else if (score>= 70 && score <= 79) {
//         return 'B';
//       }
//        else if (score>= 60 && score <= 69) {
//         return 'C';
//       }
//        else if (score>= 33 && score <= 59) {
//         return 'D';
//       }
//        else if (score>= 0 && score <= 32) {
//         return 'Fail';
//       }
//        else {
//         return 'Invalid marks X';
//       }
//  }
//  console.log(getGrade(39));




// Rock-paper-scissors logic
function rps(user, computer) {
    if (user === "rock" && computer === "scissor") return "user";
    if (user === "scissor" && computer === "rock") return "computer";
    if (user === "paper" && computer === "rock") return "user";
    if (user === "rock" && computer === "paper") return "computer";
    if (user === "scissor" && computer === "rock") return "computer";
    return "computer";
}
 console.log(rps("rock", "scissor"));