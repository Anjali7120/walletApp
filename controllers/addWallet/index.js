import db from "../../models"; 
const WalletModel = db.wallet;
// const Op = db.Sequelize.Op;

export default async (req, res) => {
    console.log("jiiiiiiiiii");
    const wallet = {
        wallet_user_id: req.body.wallet_user_id,
        balance: req.body.balance
    };

    console.log(wallet);
    WalletModel.create(wallet)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Wallet."
            });
        });
   
};
