import db from "../../models"; 
const WalletModel = db.wallet;
// const Op = db.Sequelize.Op;

export default async (req, res) => {
    const wallet = {  
        ...req.body.wallet_user_id && {wallet_user_id: req.body.wallet_user_id },
        ...req.body.balance && {balance: req.body.balance}
    };

    await WalletModel.update(
        wallet ,
        { where: { id: req.query.id } }
      )
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while editing the Wallet."
            });
        });
   
};
