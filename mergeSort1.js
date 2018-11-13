// mergeSort(list)
// break case: if list.length < 2, return  
// break the list into halves L & R 
// Lsorted = mergeSort(L)
// Rsorted = mergeSort(R)
// return merge(Lsorted, Rsorted)
// list[34, 83, 10, 9, 1, 4]
// ========
// {1} base case: if list.length < 2 , return //FALSE
// break the list into halves L & R [34,83,10] [9,1,4]
// Lsorted = mergeSort(L) [34,83,10] {2} -> [10,34,83]
// Rsorted = mergeSort(R) -> [1,4,9]
// return merge(Lsorted,Rsorted)
// { 2 } base case: if list.length < 2, return //false
// break the list into halves L & R[34][83, 10]
// Lsorted = mergeSort(L)[34]
// Rsorted = mergeSort(R)[10,83]
// return merge(Lsorted, Rsorted) [34] [10,83] -> [10,34,83]
// -> [1,4,9,10,43,83]




function mergeSortRecursive(arr) {
    // base case
    if (arr.length <= 1) return arr;
    
    // divide and conquer 
    const leftHalf = array.slice(0, array.length / 2);
    const rightHalf = array.slice(array.length / 2);
    const leftSorted = mergeSortRecursive(leftHalf);
    const rightSorted = mergeSortRecursive(rightHalf);
 

    return merge(leftSorted, rightSorted);
};

function merge(left, right) {
    var result = [], iLeft = 0, iRight = 0;
  
    // while result is not fully populated
    while (result.length < (left.length + right.length)) {
      // if all elements in left have been added, then add remaining right elements
      if (iLeft === left.length) result = result.concat(right.slice(iRight));
      // if all elements in right have been added, then add remaining left elements
      else if (iRight === right.length) result = result.concat(left.slice(iLeft));
      // compare elements in subarrays and add lower of the two to result
      else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);
      else result.push(right[iRight++]);
    }
    return result;
}
  
function mergeSortIterative(array) {
    
}