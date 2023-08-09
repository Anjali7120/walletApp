import db from "../../models"; 
const WalletModel = db.wallet;
// const Op = db.Sequelize.Op;

export default async (req, res) => {
    const wallet = {
        wallet_user_id: req.body.wallet_user_id,
        balance: req.body.balance
    };
    await WalletModel.findAll({where : {wallet_user_id:wallet.wallet_user_id}})
    .then((x)=>JSON.parse(JSON.stringify(x)))
    .then((data)=>{
        if(data.length==0)
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

        else
        {
            res.status(500).send({
                message: "Wallet already exist"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Wallet."
        });
    });

   
   
};
