export default async function handler(req, res) {
    const data = await fetch("https://blockchain.joeroyalty00.repl.co/transactions").then(data => data.json()).catch(error => res.send({error: error}))
    res.send(data);
}