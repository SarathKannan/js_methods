const uniq_arr = (arr) => {
  const uniq = arr.filter((item, i, ar) => {
    return ar.indexOf(item) === i;
  });
  return uniq;
};

const uniq_arr_obj = (arr) => {
  const uniq = arr.filter((item, i, ar) => {
    return ar.indexOf(item) === i;
  });
  return uniq;
};

const methods = { uniq_arr, uniq_arr_obj };
module.exports = methods;
