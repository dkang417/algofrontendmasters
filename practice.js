// [1,2,3],3 => [3,6,9]
// use recursion.create function that takes 2 args
function multiply(arr, num) {
    if (arr.length === 0) {
        return arr;
    }
    var last = arr.pop();
    multiply(arr, num);
    arr.push(last * num);
    console.log(arr);
}
multiply([1, 5, 10], 2); // 3 6 9
