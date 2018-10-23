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

// solution

//split the array into halves 
function mergeSort(arr) {
    if (arr.length === 1) {
        //return once we hit an array with single line
        return arr
    }

    const middle = Math.floor(arr.length / 2) //get middle item of array round down
    const left = arr.slice(0, middle) // items on left side
    const right = arr.slice(middle) 

    return merge(
        mergeSort(left),
        mergeSort(right)
    )

}
// compare the arrays item by item and return the concatenated result 
function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]

console.log(mergeSort(list))
// [1,2,2,3,3,3,5,6,7,8]
