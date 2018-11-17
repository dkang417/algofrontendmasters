
//partition(arr, lo, hi) 
    // choose last element as pivot  arr[arr.ln] (4)
    // keep track of index for pivotLoc //0
    // initialized as lo

    //for i, loop from low to high   0 to arr.
        //if current arr[i] <= pivot 7 <= 4
            //swap pivotloc and i  
            // increment pivotloc  1
        //else
            // save 4 in variable
            //swap arr[arr.ln-1] with arr[i] 
            // move 5 to i; move 4 to arr.ln-1-i


function quicksort(array, lo, hi) {
    if (lo === undefined) lo = 0;
    if (hi === undefined) hi = array.length;

    if (lo < hi) {
        var p = partition(array, lo, hi);
        // [5,3,1,4,2], 0 4
        quicksort(array, lo, p - 1);
        quicksort(array, p + 1, hi);
    }
    if(hi-lo === array.length - 1) return 
}

function partition(arr, lo, hi) { // [5,3,1,4,2], 0 4
    var pivot = arr[hi]; //2
    var pivotLoc = lo; // 0
    for (var i = lo; i < hi; i++) { // 3-> 4
        if (arr[i] <= pivot) { // 4 <= 2 false
            swap(arr, pivotLoc, i);
            // [1,3,5,4,2]
            pivotLoc++; // 1
        }
    }
    swap(arr, pivotLoc, hi);
    return pivotLoc;
}
// generic swap function 
function swap(arr, i1, i2) {
    if (i1 === i2) return;
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}
