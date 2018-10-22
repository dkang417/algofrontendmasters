// implement bubble sort
var arrayRandom = [9, 2, 5, 6, 3, 4, 7, 10, 1, 8];

// optimized bubble Sort

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function bubbleSort(array) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1] && array[i] && array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    }
    while (swapped);
    return array;
    
}



