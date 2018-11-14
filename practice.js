// merge sort recursive solution 

function mergeSortRecursive(arr) {
    if (arr.length <= 1) return arr;
    // divide and conquer 
    const leftHalf = arr.slice(0, arr.length / 2);
    const rightHalf = arr.slice(arr.length / 2);
    const leftSorted = mergeSortRecursive(leftHalf);
    const rightSorted = mergeSortRecursive(rightHalf);

    return merge(leftSorted, rightSorted);
};

function merge(left, right) {
    //create ileft and iright pointers
    var result = [], ileft = 0, iright = 0;
    // while result is not fully populated
    while (result.length < (left.length + right.length)) {
        // if all elements in left have been added, then add remaining right elements
        if (ileft === left.length) result = result.concat(right.slice(iRight));
        // if all elements in right have been added, then add remaining left elements
        else if (iright === right.length) result = result.concat(left.slice(ileft));
        // compare elements in subarrays and add lower of the two to results
        else if (left[ileft] <= right[iright]) result.push(left[ileft++]);
        else result.push(right[iright++]);
    }
    return result;
}


//// 

var bubbleSort = function (array) {
    var wall = array.length;
    while (wall >= 0) {
        for (var i = 0; i < wall; i++){
            if (array[i] > array[i + 1]) {
                array = swap(array, i, i + 1);
            }
        }
        wall--;
    }
    return array;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const bubblesort = function(array) {
    const wall = array.length;
    while (wall >= 0) {
        for (var i = 0; i < wall; i++) {
            if (arr[i] > arr[i + 1]) {
                array = sway(array, i, i + 1);
            }
        }
    }
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}