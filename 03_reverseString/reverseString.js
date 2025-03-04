const reverseString = function(string) {
  let stringSplit = string.split("");
  let arrayReversed = stringSplit.reverse("");
  let stringReversed = arrayReversed.join("");

if(string == "") {
    return ""
} else
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
