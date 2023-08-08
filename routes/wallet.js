import addWallet from "../controllers/addWallet/index";
import addWalletValidator from "../controllers/addWallet/validator";
import addWalletUser from "../controllers/addWalletUser/index";
import addWalletUserValidator from "../controllers/addWalletUser/validator";
import addWalletTransaction from "../controllers/addWalletTransaction/index";
import addWalletTransactionValidator from "../controllers/addWalletTransaction/validator";

import editWallet from "../controllers/editWallet/index";
import editWalletValidator from "../controllers/editWallet/validator";
import editWalletUser from "../controllers/editWalletUser/index";
import editWalletUserValidator from "../controllers/editWalletUser/validator";
import editWalletTransaction from "../controllers/editWalletTransaction/index";
import editWalletTransactionValidator from "../controllers/editWalletTransaction/validator";

import getWallet from "../controllers/getWallet/index";
import getWalletValidator from "../controllers/getWallet/validator";
import getWalletUser from "../controllers/getWalletUser/index";
import getWalletUserValidator from "../controllers/getWalletUser/validator";
import getWalletTransaction from "../controllers/getWalletTransaction/index";
import getWalletTransactionValidator from "../controllers/getWalletTransaction/validator";


export default router => {
    router.post("/add-wallet", addWalletValidator, addWallet);
    router.post("/add-wallet-user", addWalletUserValidator, addWalletUser);
    router.post("/add-wallet-transaction", addWalletTransactionValidator,addWalletTransaction);

    router.put("/edit-wallet", editWalletValidator, editWallet);
    router.put("/edit-wallet-user", editWalletUserValidator, editWalletUser);
    router.put("/edit-wallet-transaction", editWalletTransactionValidator,editWalletTransaction);

    router.get("/get-wallet", getWalletValidator, getWallet);
    router.get("/get-wallet-user", getWalletUserValidator, getWalletUser);
    router.get("/get-wallet-transaction", getWalletTransactionValidator,getWalletTransaction);



};