import db from "../../models"; 
const WalletTransactionModel = db.walletTransaction;

export default async (req, res) => {
    
    WalletTransactionModel.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while getting the WalletUsers."
            });
        });
   
};
