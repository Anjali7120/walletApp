import db from "../../models"; 
const WalletTransactionModel = db.walletTransaction;
const WalletModel = db.wallet;

export default async (req, res) => {
    
    const type=req.body.type;
    const typeMsg= type==1?'debit':'credit'
    const amount=req.body.amount;

    const walletDetail = await WalletModel.findAll({where:{id :req.body.wallet_id}})
    .then(data => {
        if(data.length==0)
        {
            res.status(404).send({
                message: "wallet not found"
            });
            process.exit(0);
        }
        else
        return  data[0].dataValues;
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while fetching the WalletTransaction."
        });
    });

    if(type==1 && walletDetail.balance < req.body.amount )
    {
        res.status(500).send({
            message: "Wallet does not have sufficient balance."
        });
        process.exit(0);
       
    }
    const finalAmount = type==1 ?Number(walletDetail.balance) - amount : Number(walletDetail.balance)+ amount 

    const walletTransaction = {
        wallet_id: walletDetail.id,
        type: type,
        ...req.body.remarks && {remarks:req.body.remarks},
        transaction_id: typeMsg + (Math.floor(Math.random() * (10000 - 99999 + 1)) + 10000) +'-'+amount,
        amount: amount ,
        balance:finalAmount
    };

    console.log(walletTransaction);
    await WalletModel.update({balance:finalAmount},{where:{id : walletDetail.id}})
    .then(()=>{console.log("wallet updated");})
        .then(() => {
           console.log("hiii");
            WalletTransactionModel.create(walletTransaction)
            .then(data => {
                res.send(data);
            })
            .catch(
                err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred in wallet Transaction."
                    });
                }
            )

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred in wallet."
            });
        });
  
   
};
