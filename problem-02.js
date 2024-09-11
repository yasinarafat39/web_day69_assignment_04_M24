//  Problem - 2

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  const splitedArray = email.split("@");
  const message = splitedArray[0] + " sent you an email from " + splitedArray[1];
  return message;
}



// console.log(sendNotification("yasinarafat2557gmail.com"));
// console.log(sendNotification("yasinarafat2557@gmail.com"));
// console.log(sendNotification("zihad@gmail.com"));
// console.log(sendNotification("nadim.naem5@outlook.com"));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("sadia8icloud.com"));
