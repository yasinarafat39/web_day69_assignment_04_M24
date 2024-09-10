//  Problem - 3

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  const nameArray = name.split("");
  let isNumber = false;
  for (let char of nameArray) {
    if (!isNaN(char)) {
      isNumber = true;
    }
  }
  return isNumber;
}

console.log(checkDigitsInName("Raj123raj"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));
