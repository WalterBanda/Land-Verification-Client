class TransactionService {

    constructor() {
        this.data = [{error: "Fetching data ..."}]
    }

    getdata() {
        fetch("/api/transactions")
            .then((res) => res.json())
            .then((result) => {
                this.data = result
            }).catch((error) => {
                this.data = [{error: `Unable to fetch transaction 😢: ${error.statusCode}`}]
            })
        return this.data
    }

    fetchTransactions() {
        return this.getdata();
    }
}

export default new TransactionService()