module.exports = function countCats(matrix) {
  number = 0 ;
  for (let i = 0; i < matrix.length; i++){
    matrix[i].forEach((element, index, arr) => {
      if (element == "^^") number++;
    })
  }
  return number;
  console.log(number);
};
