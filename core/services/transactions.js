class DataService {

    constructor() {
        this.transactions = [{error: "Fetching transactions ..."}]
        this.chain = [{error: "Getting The BlockChain ..."}]
    }

    getTransactions() {
        fetch("/api/transactions")
            .then((res) => res.json())
            .then((result) => {
                this.transactions = result.length > 0 ? result : [{error: "☕ Initiating Transactions"}]
            }).catch((error) => {
            this.transactions = [{error: `Unable to fetch transaction 😢: ${error}`}]
        })
        return this.transactions
    }

    getChain() {
        fetch("/api/blockchain")
            .then((res) => res.json())
            .then((result) => {
                this.chain = result.length > 0 ? result : [{error: "⛓ Initiating Blockchain"}]
            }).catch((error) => {
            this.transactions = [{error: `😢 Fetching Chain Failed: ${error}`}]
        })
        return this.chain
    }

    fetchTransactions() {
        return this.getTransactions();
    }

    fetchChain() {
        return this.getChain();
    }
}

export default new DataService()