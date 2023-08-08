import db from "../../models"; 
const WalletUserModel = db.walletUser;

export default async (req, res) => {
    
    const walletUser = {
        ...req.body.name && {name: req.body.name},
        ...req.body.email && {email: req.body.email},
        ...req.body.phone && {phone: req.body.phone}
    };


    await WalletUserModel.update(
        walletUser,
        { where: { id: req.query.id } }
      ).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while editing the WalletUser."
            });
        });
   
};
