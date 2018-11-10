// create swap function 
// bubble sort with a wall then decrement 

var bubbleSort = function (array) {
    var wall = array.length;
    while (wall >= 0) {
        for (var i = 0; i < wall; i++) {
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