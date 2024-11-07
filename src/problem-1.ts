{
  /**
     * Problem-1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements 
       in the array.
    */

  // create a sumArray function. Here I use the reduce() method to solve this problem
  const sumArray = (nums: number[]): number => {
    const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
    return totalSum;
  };

  // Sample Input
  const result = sumArray([1, 2, 3, 4, 5]);
  // Sample Output
  console.log(result); //15
  //
}
