function calculateTax(income, expenses) {
  if (
    income < 0 ||
    expenses < 0 ||
    income < expenses ||
    typeof income !== "number" ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  }

  return (income - expenses) * 0.2;
}

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  const splitedArray = email.split("@");
  const message =
    splitedArray[0] + " sent you an email from " + splitedArray[1];
  return message;
}

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

function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    Array.isArray(obj) ||
    typeof obj.name !== "string" ||
    obj.testScore > 50 ||
    obj.schoolGrade > 30 ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  let finalScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily) {
    finalScore += 20;
  }

  return finalScore >= 80 ? true : false;
}

function waitingTime(waitingTimes, serialNumber) {
  if (
    serialNumber < waitingTimes.length ||
    !Array.isArray(waitingTimes) ||
    typeof serialNumber !== "number"
  ) {
    return "Invalid Input";
  }

  let totalTime = 0;
  for (let time of waitingTimes) {
    if (typeof time === "number" && time > 0) {
      totalTime += time;
    } else {
      return "Invalid Input";
    }
  }

  const remainingCandidates = serialNumber - 1 - waitingTimes.length;
  const avgTimeEachOne = Math.round(totalTime / waitingTimes.length);
  const waitingTime = remainingCandidates * avgTimeEachOne;
  return waitingTime;
}
