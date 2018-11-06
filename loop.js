// function computeFactorial(num) {
//     if (num === 1) {
//         return 1;
//     } else {
//         return num * computeFactorial(num - 1);
//     }
// }
// compueFactorial(4);




// write a recursive function that takes an array and return its
// content in reverse 

var recrusiveReverse = function (arr) {
    var reversedArr = [];
    var addItems = function (orderedArr) {
        // if array is empty, return
        if (orderedArr.length > 0) {
            reversedArr.push(orderedArr.pop())
            addItems(orderedArr); 
        }
        return;
    };
    addItems(arr); 
    console.log(reversedArr);
};

recrusiveReverse([2, 6, 10, 14, 15]);