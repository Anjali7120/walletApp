// import db from "../../models";
// const WalletUser = db.walletUser;
// const Wallet = db.wallet;
// const WalletTransaction = db.walletTransaction;

import models from "../../models"; 
const {WalletUserModel} = models;

// const { validationResult } = require('express-validator/check');
// const Op = db.Sequelize.Op;

export default async (req, res) => {
    
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //     res.status(422).json({ errors: errors.array()[0].msg });
    //     return;
    // }

    // Create a Walletuser
    const walletUser = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        
    };

    // Save WalletUser in the database
    WalletUserModel.create(walletUser)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the WalletUser."
            });
        });
   
};
