class queue {

    constructor() {
        this._storage = {};
        this._length = 0;
        this._headIndex = 0;
    }

    enqueue(value) {
        const lastIndex = this._length + this._headIndex;
        this._storage[lastIndex] = value;
        this._length++;
      
    }
    dequeue() {
        if (this._length) {
            const firstVal = this._storage[this._headIndex];
            delete this._storage[this._headIndex];
            this._length--;
            this._headIndex++;
            return firstVal;   
        }
    }
}

var myQ = new queue();
myQ.enqueue('zero');
myQ.enqueue('one');
myQ.enqueue('two');
myQ.dequeue();
console.log(myQ);

