class Stack {

    constructor() {
        this._storage = {};
        this._length = 0;
    }

    push(value) {
        this._storage[this._length] = value;
        this._length++;
    }

    pop() {
        // what if it is empty?
        if (this._length) {
            // removes the value at the end and returns it
            const lastVal = this._storage[this.length - 1];
            // deletes last value
            this._storage[this._length - 1] = undefined;
            this._length--;
            return lastVal
        } 
    }

    peek() {
        if (this._length) {   
            return this._storage[this._length - 1];
        } 
    }

}
const myStack = new Stack();


// stack is like an array
// { _storage: {0:'zero', 1:'one' } }
// length: 2
myStack.push('zero');
myStack.push('one');
myStack.push('two');
myStack.pop();
myStack.peek();
console.log(myStack);
