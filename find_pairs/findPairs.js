function findPairs(arr, target) {
  const indicesMap = new Map();
  arr.forEach((num, index) => {
    const complement = target - num;
    if (indicesMap.has(complement)) {
      console.log(
        `Pair found at ${indicesMap.get(
          complement
        )} and ${index} (${complement} + ${num})`
      );
    }
    indicesMap.set(num, index);
  });
}

// Sample usage
const arr = [1, 3, 5, 7, 2, 4];
const target = 8;
findPairs(arr, target);
