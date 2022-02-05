const unique = require("./src/unique_array/index");
const replace = require("./src/replace_from_array/index");
const logger = require("./src/logger");

let arr = [1, 2, 3, 4, 4, 4, 6, 5, 2];
let arr_obj = [
  { name: "srt", id: 1, age: 10 },
  { name: "srt1", id: 2, age: 15 },
  { name: "srt2", id: 3, age: 21 },
  { name: "srt", id: 4, age: 10 },
];
let arr_obj_2 = [
  { name: "srt", id: 1, age: 20 },
  { name: "srt1", id: 2, age: 22 },
];

const uniq_arr = unique.uniq_arr(arr);
const uniq_arr_obj = unique.uniq_arr_obj(arr_obj, "name");
const replace_arr_obj = replace.replace_arr_obj(arr_obj, arr_obj_2);

logger([
  "uinq array",
  uniq_arr,
  "uinq array objects",
  uniq_arr_obj,
  "replace array objects",
  replace_arr_obj,
]);
