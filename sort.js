// transform this simple sorting algo into unique sort
// input [1,5,2,1] => [1,2,5]
// input [ 4,2,2,3,2,2,2] => [2,3,4]
const uniqueSort = function(arr) {
    const breadcrumbs = {};
    const result = [arr[0]];

    for (let i = 0; i < arr.length; i++) {
        if (!breadcrumbs[arr[i]]) {
            result.push(arr[i]);
            breadcrumbs[arr[i]] = true;
        }
    }
    console.log( result.sort((a, b) => a - b));
}
uniqueSort([4, 2, 2, 2, 2, 3, 2, 2]); // [2,3,4]
