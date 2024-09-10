//  Problem - 2

function sendNotification(email) {
  function isDoubleAt(email) {
    const splitEmail = email.split("");

    let counter = 0;
    for (let char of splitEmail) {
      if (char === "@") {
        counter++;
      }
    }
    return counter !== 1 ? true : false;
  }

  const indexOfAt = email.indexOf("@");
  const indexOfDot = email.indexOf(".");

  if (
    isDoubleAt(email) === true ||
    indexOfAt < 1 ||
    indexOfAt > email.length - 1 ||
    indexOfDot === indexOfAt + 1
  ) {
    return "Invalid Email";
  }

  const splitedArray = email.split("@");
  const message =
    splitedArray[0] + " sent you an email from " + splitedArray[1];
  return message;
}

// console.log(sendNotification("yasinarafat2557@gmail.com"));
console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));

// console.log(sendNotification("farhan34@yahoo.com"));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("sadia8icloud.com")); 
// console.log(sendNotification("sadia8@.com")); 
