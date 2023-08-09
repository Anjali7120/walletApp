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
      .then((x)=>JSON.parse(JSON.stringify(x)))
        .then(data => {
        data=data.map((x)=>{
            x={
                ...x,
                wallet_user_name:x.wallet_user.name,
                wallet_user_phone:x.wallet_user.phone,
                wallet_user_email:x.wallet_user.email,
            }
            return x;
        })
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while editing the Wallet."
            });
        });
   
};
