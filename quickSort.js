
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
//[3,7,6,1,2,5,4]

function quicksort(array, lo, hi) {
    if (lo === undefined) lo = 0;
    if (hi === undefined) hi = array.length;

    if (lo < hi) {
        var p = partition(array, lo, hi);
        quicksort(array, lo, p - 1);
        quicksort(array, p + 1, hi);
    }
    if(hi-lo === array.length - 1) return 
}

function partition(arr, lo, hi) {
    var pivot = arr[hi];
    var pivotLoc = lo;
    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            swap(arr, pivotLoc, i);
            pivotLoc++;
        }
    }
}

