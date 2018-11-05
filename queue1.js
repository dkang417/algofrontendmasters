function Queue(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._head = 0;
    this._tail = 0;
}

Queue.prototype.enqueue = function (value) {
    if (this.count() < this._capacity) {
        this._storage[this._tail++] = value;
        return this.count();
    }
    return 'max capacity reached';
};

Queue.prototype.dequeue = function () {
    var headElement = this._storage[this._head];
    delete this._storage[this._head];
    this._head++;
    return headElement;
}

