const getRandomInt = (min, max) => {

  let res = Math.random();
  res = res * (max - min);
  res += min;
  return Math.round(res);
};

// eslint-disable-next-line no-console
console.log(getRandomInt(55, 77));

const checkStringLength = (string, limit) => {
  if (string.length <= limit) {
    return true;
  }
  return false;
};

// eslint-disable-next-line no-console
console.log(checkStringLength('string', 13));
