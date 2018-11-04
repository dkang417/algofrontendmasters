class HashTable {

    constructor(val) {
        this._storage = [];
        this._tableSize = val;
        this._inputSize = 0;
    }

    insert(key,value) {
        const index = this._hash(key, this.tableSize);
        if (this._storage[index]) {
            this._storage[index] = [];
        }
        //todo loop through array and find if key was already inserted
        this._storage[index].push([key, value]);
        // [0,0,0,[['a',1],['b',2]]] handling collision-when hashed function returns same index for a diff key

    }

    retrieve(key) {
        const index = this._hash(key, this._tableSize);
        const arrayAtIndex = this._storage[index];

        if (arrayAtindex) {
            for (let i = 0; i < arrayAtIndex.length; i++){
                const keyValueArray = arrayAtIndex[i];
                if (keyValueArray[0] === key) return keyValueArray[1];
            }
        }
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
