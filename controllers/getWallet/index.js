import db from "../../models"; 
const WalletModel = db.wallet;
const WalletUserModel = db.walletUser;
// const Op = db.Sequelize.Op;

export default async (req, res) => {
    const wallet = {  
        ...req.query.id && {id : req.query.id},
        ...req.query.wallet_user_id && {wallet_user_id: req.query.wallet_user_id },
        ...req.query.balance && {balance: req.query.balance}
    };

    await WalletModel.findAll(
        { 
            include: [{
                as: 'wallet_user',
                model: WalletUserModel
            }],
            where: wallet }
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
