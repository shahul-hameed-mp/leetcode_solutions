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