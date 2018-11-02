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
        // loop and find the node before the tail! 
        // node.next === this.tail
        // traverse through linked list:
        let currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        // we know our tail. remove current nodes next
        currentNode.next = null;
        this.tail = currentNode;
    }

    contains(value) {
        // traverse to check if value is in list
        let currentNode = this.head;
        while (curerntNode.value !== value) {
            currentNode = currentNode.next;
        }
        return currentNode.value === value;
    }

    isHead(node) {
        return node === this.head;
    }
    isTail(node) {
        return node === this.tail;
    }


}
var myList = new LinkedList(1);
myList.insert(2);
myList.insert(3);
myList.remove();


console.log(myList);

// {
//     head: { value: 1, next: { value: 2, next: {value: 3, next: null}} }
//     tail: {value:3, next: null}
// }
