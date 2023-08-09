import db from "../../models"; 
const WalletModel = db.wallet;
const WalletTransactionModel = db.walletTransaction
// const Op = db.Sequelize.Op;

export default async (req, res) => {
    const wallet = {
        wallet_user_id: req.body.wallet_user_id,
        balance: req.body.balance
    };

    const t = await db.sequelize.transaction();
    try{
        var result;
    const walletDetail= await WalletModel.findAll({where : {wallet_user_id:wallet.wallet_user_id}})
    .then((x)=>JSON.parse(JSON.stringify(x)))

    if(walletDetail.length==0)
       await WalletModel.create(wallet,{transaction:t})
        .then((x)=>JSON.parse(JSON.stringify(x)))
        .then(data => {
            result=data;
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
    if(wallet.balance>0)
    {
        const walletTransaction = {
        wallet_id: result.id,
        type: 2,
        remarks:'wallet setup',
        transaction_id: 'credit' + (Math.floor(Math.random() * (10000 - 99999 + 1)) + 10000) +'-'+wallet.balance,
        amount: wallet.balance ,
        balance:wallet.balance
        };
        await WalletTransactionModel.create(walletTransaction,{ transaction: t })
        .then(()=>console.log("wallet transaction updated"))
        
    }

    await t.commit();
    res.send(wallet);
    }
    catch(err){
        await t.rollback();
        res.status(500).send({
            message: err.errors[0].message || "Some Error Occur while updating the transaction"
          });
    }   
};
