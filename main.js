const groupBy = (items, getGroupKey) => {
  // your code here :)
  return items.reduce((acc, item) => {
    const key = getGroupKey(item);
    if (acc[key]) {
      acc[key] = [...acc[key], item];
    } else {
      acc[key] = [item];
    }
    return acc;
  }, {});
};

const sumBy = (items, getGroupKey) => {
  // your code here :)
  const result = {};
  for (let [key, values] of Object.entries(items)) {
    const sumAmount = values.reduce((acc, value) => {
      return acc + value.amount;
    }, 0);
    result[key] = sumAmount;
  }
  return result;
};

const chunk = (items, chunkSize) => {
  var result = items.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  return result;
};

const luhnCheck = (number) => {
  // your code herea
  let num = number.trim();
  if (num.length <= 1) return false;
  num = num.split(" ").join("");
  if (isNaN(num)) return false;

  let sum = 0;
  let modNum = 10;
  let isEvenPositioned = false;

  while (num > 0) {
    let currentDigit = num % modNum;

    if (isEvenPositioned) {
      currentDigit = currentDigit * 2;
      if (currentDigit > 9) {
        currentDigit -= 9;
      }
      sum += currentDigit;
      isEvenPositioned = false;
    } else {
      sum = sum + currentDigit;
      isEvenPositioned = true;
    }
    num = Math.floor(num / 10);
  }
  return sum % 10 == 0;
};

module.exports = {
  luhnCheck,
  chunk,
  sumBy,
  groupBy
};