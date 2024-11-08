{
  /**
    * Problem-3: Create a TypeScript function called countWordOccurrences that accepts a sentence 
    (string) and a word (string). The function should return the number of times the word appears in 
    the sentence, ignoring case. Use the simple sentence without punctuation as input.
  */

  // create a countWordOccurrences function.
  const countWordOccurrences = (txt: string, word: string): number => {
    // convert to lowercase
    const txtLowerCase = txt.toLowerCase();
    const wordLowerCase = word.toLowerCase();
    // split the txt
    const words = txtLowerCase.split(" ");
    // count the number of times the word appears in the sentence
    const count = words.filter((word) => word === wordLowerCase).length;
    return count;
  };

  // Sample Input
  const result = countWordOccurrences("I love typescript", "typescript");
  // Sample Output
  console.log(result);

  //
}
