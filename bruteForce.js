// calculate every single combination possible and keep track
// of the minimum 

// const coins = [10, 6, 1];

// const makeChange = (value) => { //12
//     if (value === 0) return 0;
//     let minCoins;
//     coins.forEach((coin, i) => {
//         if (value - coin >= 0) {
//             let currMinCoins = makeChange(value - coin);
//             if (minCoins === undefined || currMinCoins < minCoins) {
//                 minCoins = currMinCoins;
//             }
//         }
//     });
//     return minCoins + 1;
// };
//}

// memoize + recursive approach 
const cache = {};
const coins = [10, 6, 1];

const makeChange = (c) => {
    // return the value if its in the cache
    if (cache[c]) return cache[c];
    
    let minCoins = -1;
    
    // find the best coin 
    coins.forEach(coin => {
        if (c - coin >= 0) {
            let currMinCoins = makeChange(c - coin);
            if (minCoins === -1 || currMinCoins < minCoins) {
                minCoins = currMinCoins
            }
        }
    });
}
