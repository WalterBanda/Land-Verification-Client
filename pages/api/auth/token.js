import * as admin from "firebase-admin";

export default function handler(req, res) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const idToken = authHeader.split(" ")[1];

        admin
            .auth()
            .verifyIdToken(idToken)
            .then(function (decodedToken) {
                res.sendStatus(200).send({verified: decodedToken.uid})
            })
            .catch(function (error) {
                return res.sendStatus(403).send(error)
            });
    } else {
        res.sendStatus(401);
    }

}
