class HashTable {

    constructor(val) {
        this._storage = [];
        this.tableSize = val;
    }

    insert(key,value) {
        const index = this._hash
    }

    remove() {
        
    }
//  hashes string value into an integer that cant be mapped to an array index
//  @param{ string } str - the string to be hashed
//  @param{ number } n - the size of the storage array
//  @return {number} - an integer between 0 and n
    _hash(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++)
            sum += str.charCodeAt(i) * 3
        return sum % n;
    }
}

const myHT = new HashTable(25);

console.log(myHT);
