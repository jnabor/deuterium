class Block {
    constructor(timeStamp, lastHash, hash, data) {
        this.timeStamp = timeStamp
        this.lastHash = lastHash
        this.hash = hash
        this.data = data
    }

    toString() {
        return `Block -
            Timestamp: ${this.timeStamp}
            Last Hash: ${this.lastHash.substring(0,10)}
            Hash:      ${this.hash.substring(0,10)}
            Data:      ${this.data}`
    }

    static genesis() {
        return new this('genesis time', '------', 'f1r5t-h45h', [])
    }
}

module.exports = Block;