const replace_arr_obj = (arr1, arr2) => {
  return arr1.map((obj) => arr2.find((o) => o.id === obj.id) || obj);
};

const methods = { replace_arr_obj };
module.exports = methods;
