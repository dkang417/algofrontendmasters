var yurt = function (ribs) {
    this.ribs = ribs;
};

yurt.prototype.countRibs = function () {
    if (this.ribs > 10) {
        console.log('yumm!');
    }
};

var diddyHouse = new yurt(50);

diddyHouse.countRibs(); //yumm!
