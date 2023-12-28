//   let hostChose = prompt("Choose your host");
//  function steveIsHost() {
//   if (hostChose === "Steve") {
// function introWoman() {
//   if (nameWoman === "Emma" ||
//      nameWoman === "Holly" ||
//      nameWoman === "Samantha") {
//       prompt("Hi honey, my name is"+nameWoman);}}
// let statusGuest = prompt("What is your name?");
// alert("Hi " + statusGuest);
// }
function robotScript(name, status /*, host*/) {
  let nameTransformed = name[0].toUpperCase() + name.slice(1);
  if (status === "host") {
    alert("Welcome sir.");
  } else {
    // let greetings = "Hello, I am " + host + ". I will be your host.";
    alert("Hello, you are " + nameTransformed + " and you are " + status + ".");
    // if (greetings === "Boss here") {
    //    alert("Hi Boss");
    // } else {
    //  alert("Who are you?");
    // }
    let statusGuest = prompt("Confirm your relationship status:");
    if (statusGuest === "single") {
      let gender = prompt("Are you male or female?");
      if (gender === "male") {
        let nameWoman = prompt(
          "Would  you like to talk to Emma, Holly or Samantha?"
        );
        //or while loop
        if (nameWoman === "Emma") {
          alert("Hi honey, my name is Emma.");
          let statusGuest = prompt("What is your name?");
          alert("Hi " + statusGuest);
        } else if (nameWoman === "Holly") {
          alert("Holly");
        } else if (nameWoman === "Samantha") {
          alert("Samantha");
        } else {
          alert("Choose one of the three ladies please.");
        }
      } else {
        alert("Sorry, I can't help you.");
      }
    }
  }
}
// } else {
//   alert("Other hosts will be available soon");

robotScript("steve", "single");
robotScript("steve", "host");
// }

// function steveIsHost() {

// }