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




function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}
function merge(left, right) {
    
}