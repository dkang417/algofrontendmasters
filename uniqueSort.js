// transform this sorting algo into unique sort
// it shouldnt return any duplicate values in the sorted array

//input [1,5,2,1] -> [1,2,5]
//input [4,2,2,3,2,2]

// cache results into breadcrumbs 

const uniqSort = function (arr) {
    const breadcrumbs = {};
    const result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        // start the for loop at 1 as element 0 can never be a duplicate 
        
        if (!breadcrumbs[arr[i]]) {
            result.push(arr[i]);
            // saves into breadcrumbs cache
            breadcrubs[arr[i]] = true;
        }
    }
    return result.sort((a, b) => a - b);
};

uniqSort([4, 2, 2, 3, 2, 2]); // [2,3,4]

