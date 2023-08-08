import db from "../../models"; 
import moment from "moment";
const WalletTransactionModel = db.walletTransaction;

export default async (req, res) => {
    
    const walletTransaction = {
        ...req.query.id && {id : req.query.id},
        ...req.query.wallet_id && { wallet_id: req.query.wallet_id},
        ...req.query.type && {type: req.query.type},
        ...req.query.balance && {balance:req.query.balance},
        ...req.query.transaction_id && {transaction_id:req.query.transaction_id},
        ...req.query.remarks && { remarks:req.query.remarks},
        ...req.query.amount && {amount:req.query.amount},
    };

    await WalletTransactionModel.findAll(
        { where: walletTransaction }
      )

      .then((x)=>JSON.parse(JSON.stringify(x)))
    .then(data => {
        
            const result=data.map((x)=>{

                x={
                    ...x,
                    createdAt:  moment(x.createdAt).format('YYYY-MM-DD HH:mm:ss'),
                    updatedAt:  moment(x.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
                    
                }
                return x;
            })
            res.send(result);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while editing the WalletTransaction."
            });
        });
   
};
