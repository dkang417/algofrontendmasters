class LinkedList {

    constructor(value) {
        this.head = { value, next: null };
        this.tail = this.head;
    }

    insert(value) {
        // update tail reference
        const node = { value, next: null };
        this.tail.next = node;
        this.tail = node;
    }
    remove() {

    }

}
var myList = new LinkedList(1);
myList.insert(2);
myList.insert(3);

console.log(myList);

// {
//     head: { value: 1, next: { value: 2, next: {value: 3, next: null}} }
//     tail: {value:3, next: null}
// }
