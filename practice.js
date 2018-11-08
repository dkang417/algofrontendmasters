// create a stack
function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
}

Stack.prototype.push = function (value) {
    if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    }
    return 'max capacity reached';
};

function Stack(capacity) {
    this._capacity = capacity;
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