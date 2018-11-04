// queue first in first out 
class queue {
    constructor() {
        this._container = {};
        this._length = 0;
        this._headIndex = 0;
    }

    add(value) {
        const lastIndex = this._length + this._headIndex;
        this._container[lastIndex] = value;
        this._length++;
    }
    remove() {
        delete this._container[this._headIndex];
        this._length--;
        this._headIndex++;
    }
}
var myQueue = new queue();
myQueue.add('add me');
myQueue.add('me too')

console.log(myQueue);