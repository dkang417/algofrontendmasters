//bubble sort 
// create a WALL. then decrement the wall and work backwards
var bubbleSort = function (array) {
    // while wall > 0
    var wall = array.length; // first sorted element
    // iterate through array up to wall
    while (wall >= 0) {
        // if next value < current, swap
        for (var i = 0; i < wall; i++) {
            if (array[i] > array[i + 1]) {
                array = swap(array, i, i + 1);
            }
        }
        wall--;
    }
    return array;
};

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
