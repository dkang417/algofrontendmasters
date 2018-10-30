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
        
    }

    peek() {
        
    }

}
const myStack = new Stack();

console.log(myStack);
// stack is like an array
// { _storage: {0:'zero', 1:'one' } }
// length: 2
myStack.push('zero');
myStack.push('one');


// to pop we need to know last index 
myStack.pop();
// { _storage: {0:'zero'}}
// length:1