// Problem - 4

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

// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }))
// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );

// console.log(calculateFinalScore({}));

// console.log(calculateFinalScore(["hello", "ade"]));
// console.log(calculateFinalScore(null));
// console.log(calculateFinalScore("string"));
