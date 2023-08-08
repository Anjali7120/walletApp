import db from "../../models"; 
const WalletUserModel = db.walletUser;

export default async (req, res) => {
    
    const walletUser = {
        ...req.query.id && {id : req.query.id},
        ...req.query.name && {name: req.query.name},
        ...req.query.email && {email: req.query.email},
        ...req.query.phone && {phone: req.query.phone}
    };

    await WalletUserModel.findAll(
        { where: walletUser }
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
