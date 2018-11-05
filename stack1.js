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
    return 'max capacity already reached.remove element before adding a new one.'; //stack overflow
};

Stack.prototype.pop = function () {
    var value = this._storage[--this._count]; // decrement first then return
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return value;
};

Stack.prototype.peek = function () {
    return this._storage[this.count - 1];
}


