import db from "../../models"; 
const WalletUserModel = db.walletUser;

export default async (req, res) => {
    
    WalletUserModel.findAll()
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
