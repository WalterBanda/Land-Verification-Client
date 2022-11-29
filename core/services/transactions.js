class DataService {
  constructor() {
    this.transactions = [{ error: "Fetching transactions ..." }];
    this.chain = [{ error: "Connecting to Land BlockChain ..." }];
    this.land = [{ error: "Getting Land Owners..." }];
  }

  getTransactions() {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((result) => {
        this.transactions =
          result.length > 0
            ? result
            : [
                {
                  error:
                    " Congratulation 🎉 you have the privilage of getting token number 1 on the ⛓",
                },
              ];
      })
      .catch((error) => {
        this.transactions = [
          { error: `Unable to fetch transaction 😢: ${error}` },
        ];
      });
    return this.transactions;
  }

  getChain() {
    fetch("/api/blockchain")
      .then((res) => res.json())
      .then((result) => {
        this.chain =
          result.length > 0
            ? result
            : [
                {
                  error:
                    "Congrats 🎉 on being the first User. Take the privilage of having your land as first in ⛓",
                },
              ];
      })
      .catch((error) => {
        this.transactions = [{ error: `😢 Fetching Chain Failed: ${error}` }];
      });
    return this.chain;
  }

  getLand() {
    fetch("/api/land")
      .then((res) => res.json())
      .then((result) => {
        this.land =
          result.length > 0
            ? result
            : [
                {
                  error: "No land users in the platform now ⛓",
                },
              ];
      })
      .catch((error) => {
        this.transactions = [{ error: `😢 Fetching Chain Failed: ${error}` }];
      });
    return this.land;
  }

  fetchTransactions() {
    return this.getTransactions();
  }

  fetchChain() {
    return this.getChain();
  }

  fetchLand() {
    return this.getLand();
  }
}

export default new DataService();
