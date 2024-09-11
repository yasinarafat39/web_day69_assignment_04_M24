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

console.log(waitingTime([3, 5, 7, 11, 6], 10)); // 24
console.log(waitingTime([13, 2], 6)); // 24
console.log(waitingTime([13, 2, 6, 7, 10], 6)); // 0
console.log(waitingTime([6], 4)); // 12
console.log(waitingTime(7 , 10)); // Invalid Input
console.log(waitingTime("[6,2]", 9)); // Invalid Input
console.log(waitingTime([7, 8, 3, 4, 5], "9")); // Invalid Input
