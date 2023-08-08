import db from "../../models"; 
const WalletTransactionModel = db.walletTransaction;

export default async (req, res) => {
    
    const walletTransaction = {
        ...req.body.wallet_id && { wallet_id: req.body.wallet_id},
        ...req.body.type && {type: req.body.type},
        ...req.body.status && {status:req.body.status},
        ...req.body.remarks && { remarks:req.body.remarks},
        ...req.body.amount && {amount:req.body.amount},
    };

    await WalletTransactionModel.update(
        walletTransaction,
        { where: { id: req.query.id } }
      )
    .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while editing the WalletTransaction."
            });
        });
   
};
