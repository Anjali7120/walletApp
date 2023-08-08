import db from "../../models"; 
const WalletModel = db.wallet;

export default async (req, res) => {
    
    WalletModel.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while getting the WalletUsers."
            });
        });
   
};
