const removeFromArray = function(itemArray, ...removeItems) {
  return itemArray.filter(item => !removeItems.includes(item))
};

console.log(removeFromArray([1, 2, 3, 4], 2, 4));

// Do not edit below this line
module.exports = removeFromArray;
