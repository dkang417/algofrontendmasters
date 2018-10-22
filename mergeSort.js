merge(L, R)
//[] -> [3,9,10,27]
// [3,27] // [9,10]
// divide input array into n single element subarrays
// initialize empty array
// compare the first index of the left array
// to the first index of the right array
// push lower value to empty array
// shift array with the lower value
// repeat until both arrays are empty
// step 2 
// repeatedly merge subarrays and sort on each merge 


 
// psudocode: mergesort
// mergesort(list)
// base case: if list.length < 2, return 
// break the list into halves L & R
// Lsorted = mergeSort(L)
// Rsorted = mergeSort(R)
// return merge(Lsorted, Rsorted)

     
// [7, 6, 1, 12]
// break the list into havles 
// [7, 6]
//[7] <= return sorted list of length 1 Lsorted
// [1, 12]
// [1]
// [12]

[1,6,7,12]