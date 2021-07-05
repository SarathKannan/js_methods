const unique = require("./src/unique_array/index");

let arr = [1, 2, 3, 4, 4, 4, 6, 5, 2];
let arr_obj = [{name : 'srt', age : 10}, {name : 'srt1', age : 15}, {name : 'srt2', age : 21}, {name : 'srt', age : 10}]
console.log(unique.uniq_arr(arr));
console.log(unique.uniq_arr_obj(arr_obj));

