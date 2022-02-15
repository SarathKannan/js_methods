const find_by_near_number = (arr, number) => {
  const distance = (a, t) => Math.abs(t - a);
  arr.sort((a, b) => distance(a, number) - distance(b, number));
  return arr;
};

const methods = { find_by_near_number };
module.exports = methods;
