class TransactionService {

    constructor() {
        this.data = [{error: "Fetching data ..."}]
    }

    getTransactions() {
        fetch("/api/transactions")
            .then((res) => res.json())
            .then((result) => {
                this.data = result.length > 0 ? result : [{error: "☕ Initiating Transactions"}]
            }).catch((error) => {
            this.data = [{error: `Unable to fetch transaction 😢: ${error}`}]
        })
        return this.data
    }

    fetchTransactions() {
        return this.getTransactions();
    }
}

export default new TransactionService()