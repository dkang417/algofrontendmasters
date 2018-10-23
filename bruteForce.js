// calculate every single combination possible and keep track
// of the minimum 

const coins = [10, 6, 1];

const makeChange = (value) => { //12
    if (value === 0) return 0;
    let minCoins;
    coins.forEach((coin, i) => {
        if (value - coin >= 0) {
            let currMinCoins = makeChange(value - coin);
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1;
};

