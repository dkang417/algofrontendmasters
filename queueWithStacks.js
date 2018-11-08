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

Stack.prototype.count = function () {
    return this._count;
}



function Queue_TwoStacks() {
    this._stackIn = new Stack();
    this._stackOut = new Stack();
}

Queue_TwoStacks.prototype.enqueue = function (val) {
    this._stackIn.push(val);
}
Queue_TwoStacks.prototype._transferStacks = function () {
    while (this._stackIn.count() > 0) {
        this._stackOut.push(this._stackIn.pop());
    }
};
Queue_TwoStacks.prototype.dequeue = function () {
    if (this._stackOut.count() === 0) this._transferStacks();
    return this._stackOut.pop();
};
Queue_TwoStacks.prototype.count = function () {
    return this._stackIn.count() + this._stackOut.count();
}


