const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));

  console.log("horizontalJoin: ", horizontalJoin);
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const transpose = function(matrix) {
    const outputArray = [];
    
    for (let i = 0; i < matrix[0].length; i++) {
      outputArray.push([]);
      for (let j = 0; j < matrix.length; j++) {
        // console.log("i =", i, "j =", j);
        outputArray[i].push(matrix[j][i]);
      }
    }
    return outputArray;
  };
    
  const verticalFlip = transpose(letters);

  const verticalJoin = verticalFlip.map(ls => ls.join(''));
    
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;