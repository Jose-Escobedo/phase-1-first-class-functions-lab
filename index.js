// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = (arr) => {
  return arr.slice(2, 4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrDrivers, arrFunction) {
  if (arrFunction == returnFirstTwoDrivers) {
    arrDrivers = returnFirstTwoDrivers(arrDrivers);
    return arrDrivers;
  } else if (arrFunction == returnLastTwoDrivers) {
    arrDrivers = returnLastTwoDrivers(arrDrivers);
    return arrDrivers;
  }
}
