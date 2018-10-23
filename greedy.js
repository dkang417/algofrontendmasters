// write a function, makeChange, that returns an integer that 
// represents the least number of coins that add up to an amount where the amount
// is always divisible by 5.

// coin values: 5,10,25

// input amount:40, output #of coins: 3 (25,10,5)

const makeChange = (coins, amount) => {
    coins.sort((a, b) => b - a);
    let coinTotal = 0;
    let i = 0;
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i];
            coinTotal++;
        } else {
            i++;
        }
    }
    return coinTotal;
};
makeChange([5, 10, 25], 50);
// input amount: 40, output # of coins: 3(25,10,5)







function binarySearch(list, item) {
    var min = 0;
    var max = list.length - 1;
    var guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);

        if (list[guess] === item) {
            return guess;
        }
        else {
            if (list[guess] < item) {
                min = guess + 1;
            }
            else {
                max = guess - 1;
            }
        }
    }
    return -1;
}
binarySearch([2, 6, 7, 90, 103], 90);
