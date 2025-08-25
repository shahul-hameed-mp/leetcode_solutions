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


// tomorrow store it in  map and solve the in sorted Array

