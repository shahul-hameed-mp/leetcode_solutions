// 24 -08 - 2025
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// result =twoSum([2,7,11,15], 9)
// console.log(result);


// 25 -08 - 2025

// var twoSum = function(nums, target) {
//     const prev_values={};
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (complement in prev_values) {
//             return [prev_values[complement], i];
//         }
//         prev_values[nums[i]] = i;
//     }
//     return null;
// };

// 26 -08 - 2025

// my first code
/*
var maxProfit = function(prices) {
    for(i=0;i<prices.length;i++){
        max=0
        for (j=i+1;j<prices.length;j++){
            if (i<j ){
             max=0
            }
            if ((j-i)>max){
                max=j-i
            }
        }
        return max;
    }
};
*/
// result = maxProfit([7,1,5,3,6,4]);
// console.log(result);



/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//      let minPrice=Infinity;
//      let maxPrice=0
//     for (let price of prices){
//         if (price<minPrice){
//             minPrice=price
//         }
//         let profit=price-minPrice
//         if (profit>maxPrice){
//             maxPrice=profit
//         }
//     }
//     return maxPrice
// };


 // 27 -08 - 2025



// var containsDuplicate = function(nums) {
//     for (let i=0;i<nums.length;i++){
//         for (let j=i+1;j<nums.length;j++){
//             if (nums[i] === nums[j]){
//                 return true
//             }
            
//         }
//     }
//     return false
// };


//  this was the first submit but there showed that Time Limit Exceeded 


/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     const numSet = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         if (numSet.has(nums[i])) {
//             return true;
//         }
//         numSet.add(nums[i]);
//     }
//     return false;
// };


// var containsDuplicate = function(nums) {
//     const seenElement ={}
//     for (let i=0; i<nums.length;i++){
//         if (nums[i] in seenElement){
//             return true
//         }
//         seenElement[nums[i]]=i
//     }
//     return false
// }

// result = containsDuplicate([1, 2, 3, 4]);
// console.log(result);

