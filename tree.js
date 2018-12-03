// any number of children
function Tree(value) {
    this.value = value;
    this.children = [];
}

// adds child to tree or subtree
Tree.prototype.addChild = function (value) {
    var child = new Tree(value);
    this.children.push(child);
    return child;
};

var tree = new Tree(1);
var branch1 = tree.addChild(2);
var branch2 = tree.addChild(3);
var branch3 = tree.addChild(4);