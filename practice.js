// [1,2,3,4,5] => [5,4,3,2,1]

function recursiveReverse(arr) {
    var reversed = [];
    console.log(arr);
    function addtoReverse(oldArray) {
        if (oldArray.length > 0) {
            reversed.push(oldArray.pop())
            addtoReverse(oldArray);
        }
        return;
    };
    addtoReverse(arr);
    console.log(reversed);
    console.log(arr);
}


recursiveReverse([2, 12, 23, 44, 65]);
