
const SHA256 = require('crypto-js/sha256')
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
            Last Hash: ${this.lastHash.substring(0,20)}
            Hash:      ${this.hash.substring(0,20)}
            Data:      ${this.data}`
    }

    static genesis() {
        return new this('genesis time', '------', 'f1r5t-h45h', [])
    }

    static mineBlock(lastBlock, data) {
        const timeStamp = Date.now()
        const lastHash = lastBlock.hash
        const hash = Block.hash(timeStamp, lastHash, data)

        return new this(timeStamp, lastHash, hash, data)
    }

    static hash(timeStamp, lastHash, data) {
        return SHA256(`${timeStamp}${lastHash}${data}`).toString()

    }
}

module.exports = Block;