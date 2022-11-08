/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (!nums1.length && !nums2.length) {
    return 0;
  }
  let nums1pointer = 0;
  let nums2pointer = 0;
  const totalNums = nums1.length + nums2.length;
  const iterations = Math.ceil((totalNums + 1) / 2);
  let previous;
  let current;

  for (let i = 0; i < iterations; i++) {
    previous = current;
    const num1 = nums1[nums1pointer];
    const num2 = nums2[nums2pointer];
    if (num2 === undefined || num1 < num2) {
      current = nums1[nums1pointer];
      nums1pointer++;
    } else {
      current = nums2[nums2pointer];
      nums2pointer++;
    }
  }
  if (totalNums % 2 === 0) {
    return (previous + current) / 2;
  }
  return current;
};

const result1 = findMedianSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);
console.log('result1', result1); // 4.5

const result2 = findMedianSortedArrays([1, 3, 5, 7], [2, 4, 6]);
console.log('result2', result2); // 4

const result3 = findMedianSortedArrays([1, 2, 3, 4], [5, 6, 7]);
console.log('result3', result3); // 4

const result4 = findMedianSortedArrays([1, 2, 3, 4], [5, 6, 7, 8]);
console.log('result4', result4); // 4.5

const result5 = findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8], []);
console.log('result5', result5); // 4.5

const result6 = findMedianSortedArrays([], [1, 2, 3, 4, 5, 6, 7]);
console.log('result6', result6); // 4

const result7 = findMedianSortedArrays([1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]);
console.log('result7', result7); // 1

const result8 = findMedianSortedArrays([], []);
console.log('result8', result8); // 0

const result9 = findMedianSortedArrays([0, 0], [0, 0]);
console.log('result9', result9); // 0
