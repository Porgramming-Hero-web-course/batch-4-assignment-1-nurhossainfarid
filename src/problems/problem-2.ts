{
  /**
     * Problem-2: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array 
       with duplicates removed. Preserve the original order of elements.
    */

  // create a removeDuplicates function. Here I use the filter() method to solve this problem
  const removeDuplicates = (nums: number[]): number[] => {
    const newArray = nums.filter((item, index) => nums.indexOf(item) === index)
    return newArray;
  };

  // Sample Input
  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
   // Sample Output
  console.log(result); //[ 1, 2, 3, 4, 5 ]

  //
}
