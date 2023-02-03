// Given a string, reverse all the words which have odd length. The even length words are not changed.

function reverseOddWords(str) {
    if (str.length %2!= 0){
      let reversedWords = str.split("").reverse().join("");
      return reversedWords
    }
    else{
    return ("The string you entered has an even amount of words")
  }
}

console.log(reverseOddWords("carmenn"));