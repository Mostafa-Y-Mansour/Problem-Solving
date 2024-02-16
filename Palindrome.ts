// Given an array of strings, return the longest palindrome string.
// Each string may contain only alphanumeric characters in addition to spaces.
// A string is palindrome when it reads the same forward or backward.

/*
 // Example 1:
 array = ["eye", "california", "12321", "Level", "Was it a cat I saw"];

 answer = "Was it a cat I saw";
*/

/*
 // Example 2:
 array = ["Dubai", "amman","Cairo" , "fes"];

 answer = -1;
*/

function getLongestPalindrome(arrayS?: string[]) {
  if (!arrayS) return "Make sure there is An Array Added!!!";
  // set the default max Values to a falsy value [0 & ""]
  var maxLength: number = 0;
  var wordIndex: number = 0;

  for (var i = 0; i < arrayS.length; i++) {
    // get the looped element
    var element: string = arrayS[i];
    // remove white space from the element if any element and make All letter lowercase
    var trimmed: string = "";
    for (var x = 0; x < element.length; x++) {
      if (element[x] !== " ") {
        trimmed += element[x].toLowerCase();
      }
    }
    // A for loop to compare each forward side with the backward side of the same string and stop the loop in the middle of the string or if any of the letters are not matched
    for (
      var j = 0, o = trimmed.length - 1;
      j <= (trimmed.length - 1) / 2, o >= (trimmed.length - 1) / 2;
      j++, o--
    ) {
      // break the loop in the middle of the string or if any of the letters are not matched
      if (!(trimmed[j] === trimmed[o] && j <= o)) {
        break;
      }
      // if we came to the end of the comparison and the word is palindrome we set the index to "wordIndex"
      if (j === o && trimmed.length >= maxLength) {
        maxLength = trimmed.length;
        wordIndex = i;
      }
    }
  }

  if (maxLength) {
    return arrayS[wordIndex];
  }
  return -1;
}

// Test Cases
console.log(
  "Example 1:",
  getLongestPalindrome([
    "eye",
    "california",
    "12321",
    "Level",
    "Was it a cat I saw",
  ])
);
console.log(
  "Example 2:",
  getLongestPalindrome(["Dubai", "amman", "Cairo", "fes"])
);
console.log("Example 3:", getLongestPalindrome([]));
console.log("Example 4:", getLongestPalindrome([""]));
console.log("Example 5:", getLongestPalindrome());
