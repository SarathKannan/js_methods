const logger = (arr) => {
  arr.map((item, i) => {
    if (i % 2 === 0) {
      console.log(
        `----------------------------------\n${item} \n----------------------------------`
      );
    } else {
      console.log(item);
    }
  });
};
module.exports = logger;
