function Node(value) {
    this.next = null;
    this.value = value;
}

function LinkedList(headValue) {
    if (headValue === undefined) console.log('must provide value for first node');
    this.head = new Node(headValue);
    this.tail = this.head;
}

LinkedList.prototype.forEach = function (callback) {
    var node = this.head;
    while (node) {
        callback(node.value);
        node = node.next;
    }
};

LinkedList.prototype.print = function () {
    var result = [];
    this.forEach(function (value) {
        result.push(value);
    });
    return result.join(', ');
};

