// implement linear search 

function linearSearch(list, item) {
    // -1 index means not found
    let index = -1;
    list.forEach((listItem, i) => {
        if (listItem === item) {
            index = i;
        }
    });
    return index;
}

linearSearch([2, 5, 6, 90, 103], 90);

