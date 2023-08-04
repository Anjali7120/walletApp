import models from "../../models"; 
const {WalletUserModel} = models;

export default async (req, res) => {
    
    const walletUser = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        
    };

    WalletUserModel.create(walletUser)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the WalletUser."
            });
        });
   
};
