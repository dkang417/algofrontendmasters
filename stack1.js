var Stack = function () {
    this.storage = '';
};
Stack.prototype.push = function (val) {
    this.storage = this.storage.concat('***', val);
};
Stack.prototype.pop = function () {
    // slice off the last characters up until ***
    var str = this.storage.slice(this.storage.lastIndexOf('***') + 3);
    // updating new stack without last item
    this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'))
    return str;
}
var newStack = new Stack();
newStack.push('hi');
newStack.push('bye');
console.log(newStack);