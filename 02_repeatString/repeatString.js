const repeatString = function(string, num) {
    // First, I define a variable that is equal to the string argument.
    let stringRepeater = string
    /* Afterwards, I run two tests.
    One to check if the number is less than zero, and if it is, "ERROR" is returned.
    And second, one to check if the number is zero, which returns an empty string */
    if(num < 0) {return "ERROR"}
    if(num == 0) {return ""}
    /* If both checks are false, a loop is run which repeatedly adds the string to itself 'num' amount of times.
    This loop works by adding the stringRepeater variable to the string argument until num reaches one. */
        while (num > 1) {
          string = string + stringRepeater;
          num--;
    }
    // Finally, the string is returned with the loop's alterations intact.
    return string;
};

// Do not edit below this line
module.exports = repeatString;