import db from "../../models"; 
const WalletTransactionModel = db.walletTransaction;

export default async (req, res) => {
    
    const walletTransaction = {
        wallet_id: req.body.wallet_id,
        type: req.body.type,
        status:req.body.status,
        remarks:req.body.remarks,
        amount:req.body.amount,
    };
    WalletTransactionModel.create(walletTransaction)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the WalletTransaction."
            });
        });
   
};
