// import db from "../../models";
// const WalletUser = db.walletUser;
// const Wallet = db.wallet;
// const WalletTransaction = db.walletTransaction;
import models from "../../models"; 
const {WalletTransactionModel} = models;

// const { validationResult } = require('express-validator/check');
// const Op = db.Sequelize.Op;


export default async (req, res) => {
    
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //     res.status(422).json({ errors: errors.array()[0].msg });
    //     return;
    // }
    // Create a WalletTransaction
    const walletTransaction = {
        wallet_id: req.body.wallet_id,
        type: req.body.type,
        status:req.body.status,
        remarks:req.body.remarks,
        amount:req.body.amount,
    };

    // Save WalletTransaction in the database
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
