const unique = require("./src/unique_array/index");
const replace = require("./src/replace_from_array/index");
const sort = require("./src/find_by_near_number/index");
const map_distance = require("./src/google_map/distance_bw_loc");
const logger = require("./src/logger");

let arr = [1, 2, 3, 4, 4, 4, 6, 5, 2];
let arr2 = [1, 16, 14, 13, 6, 7, 4, 5, 3, 2, 19, 20, 10, 4, 6];
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

const find_by_near_number = sort.find_by_near_number(arr2, 10);

const distance = map_distance.distance(
  11.539387763658139,
  75.73371411539581,
  11.535645474405278,
  75.76959134026507,
  "K"
);

logger([
  "uinq array",
  uniq_arr,
  "uinq array objects",
  uniq_arr_obj,
  "replace array objects",
  replace_arr_obj,
  "find by near number",
  find_by_near_number,
  "distance",
  distance,
]);