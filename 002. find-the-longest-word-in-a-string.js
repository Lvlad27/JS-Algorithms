/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWordLength("May the force be with you") should return 5.
findLongestWordLength("Google do a barrel roll") should return 6.
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/

function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestWord = 0;
  console.log(words);
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord) {
        longestWord = words[i].length;
      }
    }
  return longestWord;
}

/*
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

function findLongestWord(str) {
  // Step 1. Split the string into an array of strings
  let words = str.split(" ");
  // let words = "The quick brown fox jumped over the lazy dog".split(' ');
  // let words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
	
  // Step 2. Initiate a variable that will hold the length of the longest word
  let longestWord = 0;

  // Step 3. Create the FOR loop
  for(let i = 0; i < words.length; i++){
    if(words[i].length > longestWord){ // If words[i].length is greater than the word it is compared with...
	longestWord = words[i].length; // ...then longestWord takes this new value
     }
  }
  /* Here words.length = 9
     For each iteration: i = ?   i < words.length?   i++  if(words[i].length > longestWord)?   longestWord = words[i].length
     1st iteration:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
     2nd iteration:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5   
     3rd iteration:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5   
     4th iteration:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5  
     5th iteration:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6 
     6th iteration:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6 
     7th iteration:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
     8th iteration:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6 
     9th iteration:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6 
     10th iteration:       9             no               
     End of the FOR Loop*/

  //Step 4. Return the longest word
  return longestWord; // 6
}

findLongestWord("The quick brown fox jumped over the lazy dog");
*/
