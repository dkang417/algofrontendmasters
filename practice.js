// create a stack
function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
}


Stack.prototype.add = function(value) {
    if (this._count < this._capacity) {
        this._storage[this.count++] = value;
        return this._count;
    }
    return 'stackoverflow';
}
Stack.prototype.pop = function () {
    // first in last out 
    if (this._count === 0) {
        return 'no element inside stack';
    }
    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return value;
}
Stack.prototype.peek = function () {
    return this._storage[this._count - 1];
}
Stack.prototype.count = function () {
    return this._count;
}

// create a queue using 2 stacks
function QueueStack() {
    this._inStack = new Stack();
    this._outStack = new Stack();
}
QueueStack.prototype.add = function (value) {
    this._inStack.push(value);
}
QueueStack.prototype._transferStack = function () {
    while (this._inStack.count() > 0) {
        this._outStack.push(this._inStack.pop());
    }
}
QueueStack.prototype.remove = function () {
    if (this._outStack.count() === 0) this._transferStack();
    return this._outStack.pop();
}
QueueStack.prototype.count = function () {
    return this._inStack.count() + this._outStack.count();
}
