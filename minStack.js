// create a stack 

function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
  }
  
  // O(1)
  Stack.prototype.push = function(value) {
    if (this._count < this._capacity) {
      this._storage[this._count++] = value;
      return this._count;
    }
    return 'Max capacity already reached. stackoverflow!';
  };
  
  // O(1)
  Stack.prototype.pop = function() {
    if (this._count === 0) {
      return 'No element inside the stack. Add element before poping.'
    }
    
    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
      this._count = 0;
    }
    return value;
  };
  
  // O(1)
  Stack.prototype.peek = function() {
    return this._storage[this._count-1];
  }
  
  // O(1)
  Stack.prototype.count = function() {
    return this._count;
  };
  
  
  // var myStack = new Stack(3);
  // console.log(myStack.push('a'), 'should be 1');



  



  // create a min stack - 
  function MinStack(capacity) {
    this._capacity = capacity;
    this._storage = {};
    this._count = 0;
    // our minstack not storage 
    this._min = new Stack();
  }
  
  // O(1)
  MinStack.prototype.push = function(value) {
    if (this._count < this._capacity) {
      // keeps track of min value
      if (this._min.peek() < value) {
        this._min.push(this._min.peek());
      } else {
        this._min.push(value);
      }
      this._storage[this._count++] = value;
      return this._count;
    }
    return 'Max capacity reached!';
  };
  
  // O(1)
  MinStack.prototype.pop = function() {
    this._min.pop();
    var value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
      this._count = 0;
    }
    return value;
  };
  
  // O(1)
  MinStack.prototype.peek = function() {
    return this._storage[this._count-1];
  };
  
  // O(1)
  MinStack.prototype.count = function() {
    return this._count;
  };
  
  // O(1)
  MinStack.prototype.min = function() {
    return this._min.peek();
  };
  